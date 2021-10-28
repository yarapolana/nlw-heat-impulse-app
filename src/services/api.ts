import axios from 'axios'
import { Platform } from 'react-native'

export const api = axios.create({
  baseURL: Platform.OS === 'ios' ? process.env.API_URL : process.env.API_IP_URL
})
