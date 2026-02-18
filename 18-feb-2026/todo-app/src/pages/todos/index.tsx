import { Card, CardContent } from "../../components/ui/card"
import { SearchInput } from "../../components/SearchInput"
import { ThemeToggle } from "../../components/ThemeToggle"
import { TodoFilters } from "../../components/TodoFilters"
import { useDarkMode } from "../../hooks/useDarkMode"

const TODOS = [
  { id: 1, title: "Complete online JavaScript course", completed: true },
  { id: 2, title: "Jog around the park 3x", completed: false },
  { id: 3, title: "10 minutes meditation", completed: false },
  { id: 4, title: "Read for 1 hour", completed: false },
  { id: 5, title: "Pick up groceries", completed: false },
]

export default function Todos() {
  const { toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen bg-gradient-to-b 
      from-purple-600 to-purple-400 dark:from-[#1f1b2e] dark:to-[#15121f]">
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-10 text-white flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-[0.3em]">
          TODO
        </h1>
        <ThemeToggle onToggle={toggleDarkMode} />
      </div>
      <div className="max-w-3xl mx-auto px-4 -mt-6 space-y-6">
        <SearchInput />
        <Card className="shadow-xl">
          <CardContent className="p-0 divide-y">
            {TODOS.map(todo => (
              <div
                key={todo.id}
                className="flex items-center justify-between px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border
                    ${todo.completed ? "bg-purple-600 border-purple-600" : ""}`}
                  />
                  <span
                    className={`${todo.completed ? "line-through text-muted-foreground" : ""}`}
                  >
                    {todo.title}
                  </span>
                </div>

                <button className="text-muted-foreground hover:text-foreground">
                  ✕
                </button>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="bg-background dark:bg-muted rounded-lg px-6 py-4 shadow">
          <TodoFilters />
        </div>
        <p className="text-center text-sm text-muted-foreground pt-4">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  )
}
