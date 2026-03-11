import { useEffect, useState } from "react";
import { useBlog } from "../../hooks/useBlog";
import PostCard from "../../components/PostCard";

type Post = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    author?: {
        name: string;
    };
};

export default function FeedPage() {
    const { getPosts } = useBlog();

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const data = await getPosts();
            setPosts(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 w-full">

            {/* Navbar */}
            <nav className="bg-slate-950 border-b border-slate-800 w-full">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
                    <h1 className="text-white font-semibold">DevBlog</h1>
                    <div className="space-x-6 text-slate-300">
                        <a href="/feeds">Feeds</a>
                        <a href="/admin">Admin</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="bg-gradient-to-b from-slate-800 to-slate-900 w-full">
                <div className="max-w-5xl mx-auto px-6 py-12 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Latest Articles
                    </h2>
                    <p className="text-slate-400 mt-2">
                        Discover tutorials, insights, and developer stories.
                    </p>
                </div>
            </section>

            {/* Content */}
            <main className="max-w-5xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </main>

        </div>
    );
}