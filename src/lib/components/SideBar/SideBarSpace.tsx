import { View, BaraReactView } from 'bara-react'
import React, { ReactNode } from 'react'

export interface SideBarSpaceProps extends BaraReactView {
  children?: ReactNode
}

export const SideBarSpace = ({ children, ...props }: SideBarSpaceProps) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  )
}