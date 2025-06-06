// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  setTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("system")

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null
    setThemeState(saved ?? "system")
  }, [])

  useEffect(() => {
    const root = window.document.documentElement

    const applyTheme = (value: Theme) => {
      if (value === "dark") {
        root.classList.add("dark")
      } else if (value === "light") {
        root.classList.remove("dark")
      } else {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        root.classList.toggle("dark", isDark)
      }
    }

    applyTheme(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const setTheme = (value: Theme) => {
    setThemeState(value)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
