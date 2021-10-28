import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps, ColorValue, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

interface IButtonProps extends TouchableOpacityProps {
  backgroundColor: ColorValue
  color: ColorValue
  isLoading: boolean
  title: string
  icon?: React.ComponentProps<typeof AntDesign>['name']
}

export function Button({ backgroundColor, color, isLoading, title, icon, ...rest}: IButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator color={color} /> : (
        <>
          {icon && <AntDesign name={icon} size={24} style={styles.icon} />}
          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  )
}
