import { BaraReactView, View } from 'bara-react'
import React, { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

import { sidebarSize } from '../variables'
import { styles } from './styles'

export interface SideBarProps extends BaraReactView {
  children?: ReactNode
  horizontal?: boolean
}

export const SideBar = ({
  children,
  horizontal = true,
  ...props
}: SideBarProps) => {
  return (
    <View
      style={[
        styles.sideBar as ViewStyle,
        horizontal ? {
          height: sidebarSize,
          flexDirection: 'row'
        } : {
            width: sidebarSize,
            flexDirection: 'column'
          }
      ]}
    >
      {children}
    </View>
  )
}