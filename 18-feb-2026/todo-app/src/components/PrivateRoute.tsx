import { Navigate } from "react-router-dom"
import { useAuthStore } from "../stores/useAuthStore"

type Props = {
    children: React.ReactNode
}

export default function PrivateRoute({ children }: Props) {
    const { isAuthenticated } = useAuthStore()

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}
