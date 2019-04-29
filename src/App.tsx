import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SideBar, SideBarItem } from './lib'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
