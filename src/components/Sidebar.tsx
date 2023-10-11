import React from 'react';
import { ScrollView } from 'react-native';

import { 
  DrawerContentComponentProps ,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

function Sidebar(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <DrawerItemList { ...props } />
    </DrawerContentScrollView>
  )
}

export default Sidebar