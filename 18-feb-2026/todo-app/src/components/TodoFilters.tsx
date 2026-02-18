export function TodoFilters() {
    return (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>5 items left</span>

            <div className="flex gap-4">
                <button className="text-purple-600 font-medium">All</button>
                <button className="hover:text-foreground">Active</button>
                <button className="hover:text-foreground">Completed</button>
            </div>

            <button className="hover:text-foreground">
                Clear Completed
            </button>
        </div>
    )
}
