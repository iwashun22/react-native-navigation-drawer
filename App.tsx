import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/screens/Home';
import Article from './src/screens/Article';

import Sidebar from './src/components/Sidebar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator 
      initialRouteName='home'
      drawerContent={Sidebar}
    >
      <Drawer.Screen name='home' component={Home}/>
      <Drawer.Screen name='article' component={Article}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}