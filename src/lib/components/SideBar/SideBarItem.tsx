import {
  BaraReactTouchableOpacity,
  Text,
  TouchableOpacity,
  View,
} from 'bara-react'
import { MaterialIcons, Octicons } from 'bara-react-icons/es'
import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'

import { styles } from './styles'

export interface SideBarItemProps extends BaraReactTouchableOpacity {
  iconOcticon?: string
  iconMaterial?: string
  iconSize?: number
  labelSize?: number
  label?: string
  style?: any
}

export const SideBarItem = ({
  iconMaterial,
  iconOcticon,
  iconSize,
  labelSize,
  label,
  style,
  ...props
}: SideBarItemProps) => {
  const hasLabel = !!label
  return (
    <TouchableOpacity
      kind="sidebar-button"
      style={[styles.sideBarItem as ViewStyle, style]}
      {...props}
    >
      <View style={{ overflow: 'hidden' }} kind="sidebar-view">
        {iconMaterial && (
          <MaterialIcons
            name={iconMaterial}
            size={iconSize || 30}
            style={styles.sideBarIcon as ViewStyle}
          />
        )}
        {iconOcticon && (
          <Octicons
            name={iconOcticon}
            size={iconSize || 30}
            style={styles.sideBarIcon as ViewStyle}
          />
        )}
        {hasLabel && (
          <Text style={[styles.sideBarItemLabel as TextStyle, { fontSize: labelSize || 10 }]} numberOfLines={1}>{label}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}