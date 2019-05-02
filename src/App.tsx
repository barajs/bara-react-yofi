import { useBarnStream as withBarnStream, useBasicsStream as withBasicsStream, setBarnState } from 'bara';
import { withBara, useComponentsStream as withComponentsStream, View, Text, useBarnState } from 'bara-react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SideBarLayout, SideBar, SideBarItem, SideBarSeparator, SideBarSpace, SideBarContent, whenSideBarItemPressed, anySideBarItem, nameOfSideBarItem } from './lib'

const App: React.FC = () => {
  const [clicked] = useBarnState('clicked', 'nothing')
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
          <SideBarItem name="add" iconOcticon="plus" label="Add" />
          <SideBarItem
            name="settings"
            iconMaterial="settings"
            label="Settings"
          />
        </SideBar>
        <SideBarContent style={{ alignItems: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <Text style={{ color: '#f0f', fontSize: 18 }}>Bara React YoFi</Text>
          <Text style={{ fontSize: 14, margin: 20, padding: 15, borderRadius: 5, backgroundColor: '#c2c2c2' }}>yarn add bara-react-yofi</Text>
          <Text style={{ color: '#653' }}>You clicked: {clicked} </Text>
        </SideBarContent>
      </SideBarLayout>
    </View>
  );
}

const baraApp = () => {
  // Register streams
  withBasicsStream()
  withComponentsStream()
  withBarnStream({ clicked: 'nothing' })

  // Register triggers
  whenSideBarItemPressed(anySideBarItem)(({ kind, name }) => {
    setBarnState('clicked', `${kind}/${name}`)
  })
  whenSideBarItemPressed(nameOfSideBarItem('add'))(() => {
    prompt("Please enter your new item", "Item name")
  })
}

export default withBara(App, baraApp);
