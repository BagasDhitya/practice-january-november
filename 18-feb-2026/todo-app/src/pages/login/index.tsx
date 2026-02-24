import { useState } from "react"
import { useAuthStore } from "../../stores/useAuthStore"

export default function Login() {
    const { login, loading, error, user } = useAuthStore()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await login(email, password)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-96"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-2 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 border rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    )
}