import { View, BaraReactView } from 'bara-react'
import React, { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

import { styles } from './styles'

export interface SideBarContentProps extends BaraReactView {
  children?: ReactNode
  style?: any
}

export const SideBarContent = ({ children, style, ...props }: SideBarContentProps) => {
  return (
    <View style={[styles.sideBarContent as ViewStyle, style]} {...props}>
      {children}
    </View>
  )
}