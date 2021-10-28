import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { Message, IMessage } from '../Message'
import { styles } from './styles'
export function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {messages.map((message) => <Message key={message.id} {...message} />)}
    </ScrollView>
  )
}
