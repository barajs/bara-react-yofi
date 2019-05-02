import { View } from 'bara-react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SideBarLayout, SideBar, SideBarItem, SideBarSeparator, SideBarSpace, SideBarContent } from './lib'

const App: React.FC = () => {
  const horizontal = true
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }}>
      <SideBarLayout horizontal={horizontal}
        horizontalSide="bottom"
        verticalSide="right">
        <SideBar
          name="sidebar-demo"
          horizontal={horizontal}
        >
          <SideBarItem name="home" iconMaterial="home" label="Home" />
          <SideBarSeparator horizontal={horizontal} />
          <SideBarItem name="light-bulb" iconOcticon="light-bulb" label="Light" />
          <SideBarSpace />
          <SideBarSeparator horizontal={horizontal} />
          <SideBarItem name="plus" iconOcticon="plus" label="Add" />
          <SideBarItem
            name="settings"
            iconMaterial="settings"
            label="Settings Long"
          />
        </SideBar>
        <SideBarContent>
          <img src={logo} className="App-logo" alt="logo" />
        </SideBarContent>
      </SideBarLayout>
    </View>
  );
}

export default App;
