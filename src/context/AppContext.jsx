import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
const AuthContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: 'Estudiante UNCP', logged: true })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function useAuth() {
  return useContext(AuthContext)
}
