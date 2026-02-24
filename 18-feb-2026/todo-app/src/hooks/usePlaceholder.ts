import { baseUrl } from "../lib/api";
import { useState, useEffect } from "react";

export function usePlaceholder() {
  const [todosPlaceholder, setTodosPlaceholder] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function getTodoPlaceholder() {
    setLoading(true);
    try {
      // simulasi loading data
      setTimeout(async () => {
        const response = await baseUrl.get("/todos");
        setTodosPlaceholder(response.data);
        setLoading(false);
      }, 3000);
    } catch (error: any) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getTodoPlaceholder();
  }, []);

  return {
    todosPlaceholder,
    loading,
    error,
  };
}
