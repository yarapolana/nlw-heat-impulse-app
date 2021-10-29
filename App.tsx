import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import { AuthProvider } from './src/contexts/auth'
import { Home } from './src/screens/Home'
import { ErrorComponent } from './src/components/ErrorComponent'

export default function App() {
  const [isFontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!isFontsLoaded) {
    <AppLoading />
  }

  if (error) {
    <ErrorComponent {...error} />
  }

  return (
    <AuthProvider>
      <Home />
      <StatusBar style="light" />
    </AuthProvider>
  )
}
