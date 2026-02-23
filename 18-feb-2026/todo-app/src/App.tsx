import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Todos from "./pages/todos"
import Login from "./pages/login"

import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={
        <PrivateRoute>
          <Todos />
        </PrivateRoute>
      } />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
