import { useContext } from "react"
import { AuthContext } from "../contexts/auth"

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth can only be used within an AuthProvider parent')
  return context
}