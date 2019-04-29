import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SideBar, SideBarItem, SideBarSeparator } from './lib'

const App: React.FC = () => {
  const horizontal = false
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SideBar
          horizontal={horizontal}
          horizontalSide="bottom"
          verticalSide="left"
        >
          <SideBarItem name="home" iconMaterial="home" />
          <SideBarSeparator horizontal={horizontal} />
          <SideBarItem name="home" iconMaterial="home" />
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
