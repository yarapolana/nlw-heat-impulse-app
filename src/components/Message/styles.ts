import { COLORS } from './../../theme/colors'
import { FONTS } from './../../theme/fonts'
import { StyleSheet } from 'react-native'

export const styles= StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: COLORS.GRAY_QUARTERNARY,
  },
  message: {
    color: COLORS.WHITE,
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    lineHeight: 20,
    marginBottom: 12
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  username: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 16
  },
})
