import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TapNavProps } from '../routes/paramsList/AppParamList';
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

type HomeScreenProps = {}

const TestDrawer = ({ }) => {
  return (
    <View><Text>TestDrawer1</Text></View>
  )
}

const HomeDrawer = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={TestDrawer} />
    </Drawer.Navigator>
  )
}

export const HomeScreen: React.FC<TapNavProps<'Home'>> = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text>HomeScreen</Text>
      {/*<HomeDrawer />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
})