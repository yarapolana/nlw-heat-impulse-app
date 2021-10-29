import React, { useState } from 'react'
import { View, Alert, TextInput, Keyboard } from 'react-native'

import { api } from '../../services/api'
import { Button } from '../Button'
import { COLORS } from '../../theme'
import { styles } from './styles'

export function SendMessageForm() {
  const [text, setTextMessage] = useState('')
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  async function sendTextMessage() {
    if (!text.trim()) return

    try {
      setIsSendingMessage(true)
      await api.post('messages', { text })

      setTextMessage('')
      Keyboard.dismiss()
      Alert.alert('Message sent successfuly')
      setIsSendingMessage(false)
    } catch (e) {
      e instanceof Error && Alert.alert('Error sending message', String(e.message))
      setIsSendingMessage(false)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setTextMessage}
        placeholder="What do you expect from this event?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        autoCorrect={false}
        keyboardAppearance='dark'
        editable={!isSendingMessage}
        style={styles.input}
      />

      <Button
        title='Send Message'
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={isSendingMessage}
        onPress={sendTextMessage}
      />
    </View>
  )
}
