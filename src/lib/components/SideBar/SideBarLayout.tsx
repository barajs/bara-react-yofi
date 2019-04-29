import { View, BaraReactView } from 'bara-react'
import React, { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

import { styles } from './styles'

type SideBarDynamicSide = 'top' | 'bottom' | 'left' | 'right'
export interface SideBarLayoutProps extends BaraReactView {
  children?: ReactNode
  side?: string
  horizontal?: boolean
  horizontalSide?: SideBarDynamicSide
  verticalSide?: SideBarDynamicSide
}

export const SideBarLayout = ({ children, horizontal, horizontalSide, verticalSide }: SideBarLayoutProps) => {
  let direction = horizontal ? horizontalSide! : verticalSide!

  const map = {
    top: 'column',
    bottom: 'column-reverse',
    left: 'row',
    right: 'row-reverse'
  }

  const side = {
    flexDirection: map[direction]
  }
  return (
    <View style={{ position: 'absolute', flex: 1, width: '100%', height: '100%' }}>
      <View style={[styles.sideBarLayout as ViewStyle, side as ViewStyle]}>
        {children}
      </View>
    </View>
  )
}