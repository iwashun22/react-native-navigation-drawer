import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { pageList } from './src/pages';
import Home from './src/screens/Home';
import Article from './src/screens/Article';
import Notification from './src/screens/Notification';

import Sidebar from './src/components/Sidebar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator 
      initialRouteName={pageList.home}
      drawerContent={Sidebar}
    >
      <Drawer.Screen name={pageList.home} component={Home}/>
      <Drawer.Screen name={pageList.article} component={Article}/>
      <Drawer.Screen name={pageList.notification} component={Notification}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}