import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import LogoSvg from '../../assets/logo.svg'
import { UserAvatar } from '../UserAvatar'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>
            Sign out
          </Text>
        </TouchableOpacity>

        <UserAvatar uri='https://github.com/yarapolana.png' />
      </View>
    </View>
  )
}
