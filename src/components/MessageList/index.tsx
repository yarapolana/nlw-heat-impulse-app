import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { api } from '../../services/api'
import { Message, IMessage } from '../Message'
import { styles } from './styles'
export function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    api.get<IMessage[]>('messages/latest')
      .then(({ data }) => {
        setMessages(data)
      })
      .catch (e =>  {
        e instanceof Error && console.warn(JSON.stringify(e.message, null, 2))
      })
  }, []) // when do I want to execute this function, pass variables, each time the variables change it executes this function again

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
