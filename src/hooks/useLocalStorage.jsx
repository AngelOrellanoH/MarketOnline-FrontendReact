import { useState, useEffect } from "react"

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch (e) {
      console.error("Hubo un error leyendo el localStorage", e)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error("Hubo un error al tratar de escribir en el localStorage", e)
    }
  }, [key, value])

  return [value, setValue]
}
