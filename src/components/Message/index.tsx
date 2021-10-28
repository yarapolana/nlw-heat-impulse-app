import React from 'react'
import { View, Text } from 'react-native'
import { MotiView } from 'moti'
import { UserAvatar } from '../UserAvatar'
import { styles } from './styles'

export interface IMessage {
  id: string
  text: string
  user_id: string
  user: {
    id: string
    name: string
    login: string
    github_id: string
    avatar_url: string
  }
  created_at: string
}

export function Message(message: IMessage) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}>
      <Text style={styles.message}>{message.text}</Text>

      <View style={styles.footer}>
        <UserAvatar
          uri={message.user.avatar_url}
          sizes="SMALL"
        />

        <Text style={styles.username}>{message.user.login}</Text>
      </View>
    </MotiView>
  )
}
