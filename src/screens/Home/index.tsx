import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { Header } from '../../components/Header'
import { styles } from './styles'

export function Home() {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Header />
      </View>
    </KeyboardAvoidingView>
  )
}
