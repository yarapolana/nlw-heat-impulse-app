import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { api } from '../../services/api'
import { socket } from '../../services/socket'

import { Message, IMessage } from '../Message'
import { styles } from './styles'

const messagesQueue: IMessage[] = []

socket.on('new_message', (newMessage: IMessage) => {
  messagesQueue.push(newMessage)
})

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0], // the oldest message in queue
          prevState[0],
          prevState[1]
        ].filter(Boolean)) // this filter removes messages that are null or undefined

        messagesQueue.shift() // to remove the [0] item in queue giving space to the rest
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [])

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
