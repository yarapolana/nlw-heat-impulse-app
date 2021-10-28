import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export function ErrorComponent(error: Error | null) {
  return (
    <View style={styles.container}>
      <Text>Error Loading: {String(error?.message)}</Text>
    </View>
  )
}
