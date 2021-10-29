import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import LogoSvg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/useAuth'
import { UserAvatar } from '../UserAvatar'
import { styles } from './styles'

export function Header() {
  const {user, signOut} = useAuth()

  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>
              Sign out
            </Text>
          </TouchableOpacity>
        )}

        <UserAvatar uri={user?.avatar_url} />
      </View>
    </View>
  )
}
