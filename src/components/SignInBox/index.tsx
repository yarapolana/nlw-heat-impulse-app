import React from 'react'
import { View } from 'react-native'
import { useAuth } from '../../hooks/useAuth'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth()

  return (
    <View style={styles.container}>
      <Button
        title='Sign in with Github'
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  )
}
