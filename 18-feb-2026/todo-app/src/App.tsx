// router.tsx atau main.tsx
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Todos from "./pages/todos"
import Login from "./pages/login"
import TodoPlaceholder from "./pages/todo-placeholder"
import PrivateRoute from "./components/PrivateRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos",
    element: (
      <PrivateRoute>
        <Todos />
      </PrivateRoute>
    ),
  },
  {
    path: "/todo-placeholder",
    element: <TodoPlaceholder />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])