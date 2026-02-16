import { type ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <div className="app">
            <header className="header">My Profile</header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">2026</footer>
        </div>
    )
}
