import { Input } from "./ui/input"
import { useEffect, useState } from "react"

export function SearchInput() {
    const [value, setValue] = useState("")

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("Search:", value) // nanti ganti logic
        }, 400)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <Input
            placeholder="Currently typing"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-12 bg-background dark:bg-muted"
        />
    )
}
