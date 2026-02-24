import { usePlaceholder } from "../../hooks/usePlaceholder"

export default function TodoPlaceholder() {
    const { todosPlaceholder, loading, error } = usePlaceholder()

    return (
        <div className="w-screen h-full flex flex-col items-center justify-center">
            {loading !== true ? <div className="grid grid-cols-3 gap-3 p-5">
                {todosPlaceholder.map((todo: any) => {
                    return (
                        <div className="p-5 border rounded-md w-full h-full">
                            <h2>{todo?.title}</h2>
                            <span>Complete : {todo?.completed ? "✅" : "❌"}</span>
                        </div>
                    )
                })}
            </div> :
                <div className="w-screen h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Loading, please wait...
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}
