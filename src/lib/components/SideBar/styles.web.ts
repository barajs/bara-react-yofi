import { sharedStyles } from './styles.shared'

export const styles = {
  ...sharedStyles,
  sideBarItemLabel: {
    ...sharedStyles.sideBarItemLabel,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}