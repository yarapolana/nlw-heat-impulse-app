import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import { Home } from './src/screens/Home'

export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!isFontsLoaded) {
    <AppLoading />
  }

  return (
    <>
      <Home />
      <StatusBar style="light" />
    </>
  )
}
