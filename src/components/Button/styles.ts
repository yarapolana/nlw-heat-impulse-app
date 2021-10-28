import { FONTS } from './../../theme/fonts'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontFamily: FONTS.BOLD
  },
  title: {},
  icon: {
    marginRight: 12
  }
})