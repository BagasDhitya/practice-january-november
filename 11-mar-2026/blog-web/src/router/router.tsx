import { createBrowserRouter } from "react-router-dom";
import FeedPage from "../pages/feeds";
import AdminPage from "../pages/admin";

export const router = createBrowserRouter([
    {
        path: "/feeds",
        element: <FeedPage />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
]);