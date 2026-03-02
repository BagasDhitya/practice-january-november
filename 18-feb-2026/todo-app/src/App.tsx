// router.tsx atau main.tsx
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Todos from "./pages/todos"
import Login from "./pages/login"
import TodoPlaceholder from "./pages/todo-placeholder"
import PrivateRoute from "./components/PrivateRoute"
import StateExample from "./pages/state-example"
import Catalog from "./pages/catalog"

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
    path: "/state-example",
    element: <StateExample />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/catalog',
    element: <Catalog />
  }
])