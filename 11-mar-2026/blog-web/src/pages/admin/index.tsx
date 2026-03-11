import { useEffect, useState } from "react";
import { useBlog } from "../../hooks/useBlog";

type Post = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    author?: {
        name: string;
    };
};

export default function AdminPage() {
    const { getPosts, createPost } = useBlog();

    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const fetchPosts = async () => {
        const data = await getPosts();
        setPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await createPost({
            title,
            description,
            author_id: 1,
        });

        setTitle("");
        setDescription("");

        fetchPosts();
    };

    return (
        <div className="min-h-screen bg-slate-900">

            {/* Header */}
            <div className="border-b border-slate-800 bg-slate-950">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <h1 className="text-2xl font-semibold text-white">
                        Admin Dashboard
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Manage blog posts
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

                {/* Create Post */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-lg font-semibold text-white mb-4">
                        Create New Post
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            placeholder="Post title"
                            className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <textarea
                            placeholder="Post description"
                            className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white h-32"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded"
                        >
                            Publish Post
                        </button>

                    </form>
                </div>

                {/* Posts List */}
                <div className="space-y-4">

                    <h2 className="text-lg font-semibold text-white">
                        Existing Posts
                    </h2>

                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-slate-800 border border-slate-700 rounded-lg p-4"
                        >
                            <h3 className="text-white font-semibold">
                                {post.title}
                            </h3>

                            <p className="text-slate-400 text-sm mt-1">
                                {post.description}
                            </p>

                            <div className="flex justify-between text-xs text-slate-500 mt-3">
                                <span>{post.author?.name}</span>
                                <span>
                                    {new Date(post.created_at).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}