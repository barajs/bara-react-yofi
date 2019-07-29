import { BaraReactView, View } from 'bara-react'
import React, { ReactNode } from 'react'
import { ViewStyle, StyleProp } from 'react-native'

import { sidebarSize } from '../variables'
import { styles } from './styles'

export interface SideBarProps extends BaraReactView {
  children?: ReactNode
  horizontal?: boolean
  style?: StyleProp<ViewStyle>
  size?: number
}

export const SideBar = ({
  children,
  horizontal = true,
  style: customStyle,
  size = 48,
  ...props
}: SideBarProps) => {
  return (
    <View
      style={[
        styles.sideBar as ViewStyle,
        horizontal ? {
          height: size || sidebarSize,
          flexDirection: 'row',
        } : {
            width: size || sidebarSize,
            flexDirection: 'column',
        },
        customStyle
      ]}
    >
      {children}
    </View>
  )
}