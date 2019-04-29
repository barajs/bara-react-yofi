import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SideBar, SideBarItem, SideBarSeparator, SideBarSpace } from './lib'

const App: React.FC = () => {
  const horizontal = true
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SideBar
          horizontal={horizontal}
          horizontalSide="bottom"
          verticalSide="left"
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
            label="Settings"
          />
        </SideBar>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
