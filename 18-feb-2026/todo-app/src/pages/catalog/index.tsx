import ProductCard from "../../components/ProductCard"

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$249.00",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC0FM5LVgZOEKChEHyTaWm5i-8E7YPniFVU4VYVGrzgnofURIxED9xGRF1a2bRcgJqz0MzB7KZq84BIZBl9D5eXtVquItIRSiZ6iJho4qrj1WNRzUJqLlMbSnv7jYalMti-Gt_TjrJzAAAKycT7JbDdCBbyWytP_FbRiqNtHUUXQb5rUL9rce3eh_MH2Vnbk-Yk0pX6p1T-Ov4Z_aR-JPHgGUvsAVqhY3_Og8HHL6w_sd9yF7gmTsQMmz56ePw71nMHwClmimslkQQ",
        description:
            "Premium noise-cancelling headphones with up to 40 hours of battery life.",
    },
    {
        id: 2,
        name: "Smart Watch Series 7",
        price: "$399.00",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBwuuxBSUyhQLFv44F3vd-pGxryCmnGx6Q1QvyT9rgC0TAkB54vqn7Wd5A8jdzr4YelNoy-hro50ky2vu_7AILE3sGB0V00_fTeHuoAbV_mpvg2um_NVAGyAoApjTtAWeJFpFGBHl3jUFgluoYjJcT83fF3bKVVUY8_SZg7Hgk5OkefL4Asw9zoZLS_bALJGsegSGdHQvzSXlDZ6rLK5QfBqWTl8kGDfq0nH4V4T6LOhv0ypIlYgrNsl0omcCf4_W63L5fs4kBJY80",
        description:
            "Advanced health tracking and always-on Retina display.",
    },
]

export default function Catalog() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between px-4 h-16">
                    <h1 className="text-xl font-bold text-primary">E-Shop</h1>

                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="hidden md:block px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                        />
                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Cart
                        </button>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="px-4 py-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold">New Arrivals</h2>
                <p className="text-sm text-slate-500">
                    Discover our latest tech and accessories
                </p>
            </div>

            {/* Layout */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="hidden lg:block w-64 p-6 border-r border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold mb-4">Categories</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Audio
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Watches
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Gadgets
                        </label>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-1 p-4">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
