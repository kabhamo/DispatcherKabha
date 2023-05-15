import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TapNavProps } from '../routes/paramsList/AppParamList';
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useAxios from '../hooks/useAxios';
import { Response } from '../util/response';
import { getCongif } from '../../config/config';

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
  const endpoint = `top-headlines?country=gb&apiKey=${getCongif().general.apiKey}`
  const method = 'get'
  //const { response, error, loading } = useAxios({ url: endpoint, method });

  //useEffect(() => {
  //  if (response) {
  //    console.log("Arrresponse", response)
  //    response.map((item) => {
  //      console.log("item", item.title)
  //    })
  //  }
  //}, [response]);

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
    justifyContent: 'center',
    alignItems: 'center',
  },
})