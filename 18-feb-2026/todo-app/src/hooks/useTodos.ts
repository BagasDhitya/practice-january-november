import { useMemo, useState } from "react";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type FilterType = "all" | "active" | "completed";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Complete online JavaScript course", completed: true },
    { id: 2, title: "Jog around the park 3x", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Read for 1 hour", completed: false },
    { id: 5, title: "Pick up groceries", completed: false },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");

  /* ================= CRUD ================= */

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  /* ================= FILTER + SEARCH ================= */

  const filteredTodos = useMemo(() => {
    return todos
      .filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
      })
      .filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase()),
      );
  }, [todos, filter, search]);

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    search,
    setSearch,
    itemsLeft,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  };
}
