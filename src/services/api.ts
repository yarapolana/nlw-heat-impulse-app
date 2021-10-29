import axios from 'axios'
import { Platform } from 'react-native'

export const api = axios.create({
  baseURL: Platform.OS === 'ios' ? process.env.API_URL : process.env.API_IP_URL
})

__DEV__ && api.interceptors.request.use(
  req => {
    console.log(
      `[🏳️  API] ${req.method?.toUpperCase()} ${req.baseURL}${req.url} ${
        req.data ? `- ${JSON.stringify(req.data)}` : ''
      }`
    )

    return req
  },
  err => {
    console.log('[⛔️ API-REQ]')
    console.log(JSON.stringify(err, null, 2))

    return err
  }
)

__DEV__ && api.interceptors.response.use(
  res => {
    console.log(res.data.error ? '[⛔️ API-RES-OK]' : '[✅ API-RES]')
    console.log(JSON.stringify(res.data, null, 2))

    return res
  },
  err => {
    console.log('[⛔️ API-RES]')
    console.log(JSON.stringify(err, null, 2))
    throw Error(err.message)
    return err
  }
)
