import { and, ConditionPipe, ActionPipe } from 'bara'
import {
  BaraBaseComponentProps,
  kindOfTouchableOpacity,
  whenTouchableOpacityPress,
} from 'bara-react'

// Conditional Presets
export const anySideBarItem = (data: BaraBaseComponentProps) => true
export const nameOfSideBarItem = (checkName: string) => ({ name }: BaraBaseComponentProps) => name === checkName

// Bara Triggers
export const whenSideBarItemPressed = (...conditions: Array<ConditionPipe<any>>) => (...actions: Array<ActionPipe<any>>) => {
  return whenTouchableOpacityPress(
    and(
      kindOfTouchableOpacity('sidebar-button'),
      ...conditions
    )
  )(...actions)
}