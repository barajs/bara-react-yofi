import { View, BaraReactView } from 'bara-react'
import React from 'react'
import { StyleSheet } from 'react-native'

export const separatorSize = StyleSheet.hairlineWidth
export const separatorTickSize = 5

export interface SideBarSeparatorProps extends BaraReactView {
  thick?: number
  half?: boolean
  horizontal?: boolean
}

export const SideBarSeparator = ({ horizontal, thick, half, ...props }: SideBarSeparatorProps) => {
  const size = (thick ? separatorTickSize : separatorSize) / (half ? 2 : 1)

  return <View
    style={
      [horizontal ?
        {
          width: size,
          height: '100%',
        } : {
          width: '100%',
          height: size,
        }, {
        backgroundColor: '#222'
      }]
    }
    {...props}
  />
}