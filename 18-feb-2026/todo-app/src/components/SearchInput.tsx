import { Input } from "./ui/input"
import { useEffect, useState } from "react"

type Props = {
    onSearch: (value: string) => void
}

export function SearchInput({ onSearch }: Props) {
    const [value, setValue] = useState("")

    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(value)
        }, 400)

        return () => clearTimeout(timeout)
    }, [value, onSearch])

    return (
        <Input
            placeholder="Search todo..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-12 bg-background dark:bg-muted"
        />
    )
}
