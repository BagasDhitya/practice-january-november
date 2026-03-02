import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;

app.use(express.json());

const dataPath = path.join(__dirname, "data", "todos.json");

interface Todo {
  id: number;
  title: string;
  description: string;
  category: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

// ===== Helper Functions =====

const readTodos = (): Todo[] => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read data file");
  }
};

const writeTodos = (todos: Todo[]) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(todos, null, 2));
  } catch (error) {
    throw new Error("Failed to write data file");
  }
};

// ==============================
// GET ALL TODOS
// ==============================
app.get("/api/todos", (req: Request, res: Response) => {
  try {
    const todos = readTodos().filter((todo) => !todo.deletedAt);
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// ==============================
// GET TODO BY ID
// ==============================
app.get("/api/todos/:id", (req: Request, res: Response) => {
  try {
    const todos = readTodos();
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const todo = todos.find((t) => t.id === id && !t.deletedAt);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ==============================
// CREATE TODO
// ==============================
app.post("/api/todos", (req: Request, res: Response) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const todos = readTodos();

    const newTodo: Todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title,
      description,
      category,
      isCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: null,
      deletedAt: null,
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.status(201).json({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ==============================
// UPDATE TODO (PUT)
// ==============================
app.put("/api/todos/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const todos = readTodos();
    const todoIndex = todos.findIndex((t) => t.id === id && !t.deletedAt);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const { title, description, category, isCompleted } = req.body;

    const updatedTodo: Todo = {
      ...todos[todoIndex],
      title: title ?? todos[todoIndex].title,
      description: description ?? todos[todoIndex].description,
      category: category ?? todos[todoIndex].category,
      isCompleted: isCompleted ?? todos[todoIndex].isCompleted,
      updatedAt: new Date().toISOString(),
    };

    todos[todoIndex] = updatedTodo;
    writeTodos(todos);

    res.status(200).json({
      success: true,
      data: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ==============================
// DELETE TODO (Soft Delete)
// ==============================
app.delete("/api/todos/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const todos = readTodos();
    const todoIndex = todos.findIndex((t) => t.id === id && !t.deletedAt);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[todoIndex].deletedAt = new Date().toISOString();
    writeTodos(todos);

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ==============================
// START SERVER
// ==============================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
