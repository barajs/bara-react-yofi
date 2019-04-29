import {
  columnHeaderItemContentSize,
  sidebarSize,
} from '../variables'

export const sharedStyles = {
  sideBarLayout: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#222'
  },
  sideBar: {
    zIndex: 1000,
    backgroundColor: '#ccc'
  },
  sideBarItem: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: sidebarSize,
    height: sidebarSize,
    overflow: 'hidden',
    paddingLeft: 8,
    paddingRight: 8,
  },
  sideBarIcon: {
    textAlign: 'center',
    fontSize: columnHeaderItemContentSize,
  },
  sideBarItemLabel: {
    fontSize: 10,
  },
  sideBarContent: {
    flex: 1
  }
}