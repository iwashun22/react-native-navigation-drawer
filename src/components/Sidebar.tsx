import React, { useCallback, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { 
  DrawerContentComponentProps ,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import pages, { PageName } from '../pages';

function Sidebar({ state, navigation }: DrawerContentComponentProps) {
  const [currentPage, setCurrentPage] = useState<PageName>("home");
  const getColor = useCallback((focused: boolean) => {
    if(focused) return '#0007A9';
    return '#009FBD';
  }, [])
  return (
    <DrawerContentScrollView contentContainerStyle={style.sidebar}>
      {/* <DrawerItemList { ...props }/> */}
      { pages.map((page, index) => (
        <DrawerItem 
          key={index}
          label={({focused, color}) => 
            <Text 
              style={{
                color: getColor(focused)
              }}
            >{page.name}</Text>
          }
          icon={({focused, color, size}) =>
            <FontAwesome5 name={page.icon} size={24} color={getColor(focused)}/>
          }
          onPress={() => {
            navigation.navigate(page.name);
            setCurrentPage(page.name);
          }}
          focused={currentPage === page.name}
          activeTintColor='orange'
        />
      )) }
    </DrawerContentScrollView>
  )
}

const style = StyleSheet.create({
  sidebar: {
    height: '100%',
    backgroundColor: '#E6E6E6'
  },
  navItem: {
    color: 'orange'
  },
  focusedNavItem: {
    color: 'red'
  }
})

export default Sidebar