import React, { createContext, ReactNode, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as AuthSession from 'expo-auth-session'
import { api } from "../services/api"

interface IUser {
  id: string
  github_id: number
  name: string
  login: string
  avatar_url: string
}

interface ISignInResponse {
  user: IUser
  token: string
}

interface IAuthorizationResponse {
  params: {
    code?: string
    error?: string
  }
  type?: string
}

interface IAuthContextData {
  user: IUser | null
  isSigningIn: boolean
  signIn(): void
  signOut(): void
}

interface IAuthProviderProps {
  children: ReactNode
}

const TOKEN_STORAGE = '@dowhile:token'
const USER_STORAGE = '@dowhile:user'
const signInURL = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.GITHUB_CLIENT_ID}`

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null)
  const [isSigningIn, setIsSigningIn] = useState(false)

  async function signIn() {
    setIsSigningIn(true)
    const { params: { code, error: authError }, type } = await AuthSession.startAsync({ authUrl: signInURL }) as IAuthorizationResponse
    const isAuthSuccess = type === 'success' && authError !== 'access_denied'

    try { 
      if (isAuthSuccess) {
        const { data: { token, user } } = await api.post<ISignInResponse>('/authenticate', { code, isMobile: true })

        setUser(user)
        await AsyncStorage.setItem(TOKEN_STORAGE, token)
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
    } catch (e) {
      e instanceof Error && console.error(e.message)
      setIsSigningIn(false)
    } finally {
      setIsSigningIn(false)
    }
  }

  async function signOut() {
    setUser(null)
    await AsyncStorage.removeItem(TOKEN_STORAGE)
    await AsyncStorage.removeItem(USER_STORAGE)
  }

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem(TOKEN_STORAGE)
      const user = await AsyncStorage.getItem(USER_STORAGE)

      if (user && token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        // api.get<IUser>('profile').then(response => {
        //   setUser(response.data)
        // })
        setUser(JSON.parse(user))
      }
    })()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      signOut,
      signIn,
      isSigningIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}
