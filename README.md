# bara-react-yofi

Collection of beautiful React components work with Bara cross-platform

## Installation

This package was built on top of Bara and React, to use this library you have to install its peer dependencies.

```
yarn add -E bara bara-react bara-react-yofi
```

## API

### SideBar

Dynamic SideBar that can be render in 4 cornor (top, bottom, left, right) of any application.

SideBar also has support to the device orientation.

#### React Component:

```javascript
import {SideBar, SideBarItem} from 'bara-react-yofi'

export const MySideBar = () => {
  <SideBar
    horizontal={false}
    horizontalSide="bottom"
    verticalSide="left"
  >
    <SideBarItem name="home" iconMaterial="home" />
    <SideBarItem
      name="settings"
      iconMaterial="settings"
      label="Settings"
    />
  </SideBar>
}
```

#### Bara API:

##### `whenSideBarItemPress(name: string)(callback: (...args: any[]) => void)`: Bara Trigger to know when a SideBarItem is pressed.

* Params:
    - `name`: Which SideBarItem's name


## Contribute

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/barajs/bara-react-yofi)

## License

MIT © [BaraJS](https://barajs.dev)