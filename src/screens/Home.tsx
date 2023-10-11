import React from 'react';
import { SafeAreaView, Button, Text } from 'react-native';

import { DrawerScreenProps } from '@react-navigation/drawer';

function Home({ navigation, route }: DrawerScreenProps<any>) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Go to article" onPress={() => navigation.navigate("article")}/>
    </SafeAreaView>
  )
}

export default Home;