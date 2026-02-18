import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Todos from "./pages/todos"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  )
}

export default App
