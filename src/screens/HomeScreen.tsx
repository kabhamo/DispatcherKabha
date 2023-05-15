import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TapNavProps } from '../routes/paramsList/AppParamList';
import { colors } from '../util/colors';
import { DispatcherBar } from '../components/DispatcherBar';
import { DispatcherFilterBar } from '../components/DispatcherFilterBar';

const Drawer = createDrawerNavigator();

type HomeScreenProps = {}


export const HomeScreen: React.FC<TapNavProps<'Home'>> = ({ navigation }) => {


  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appBarContainer}>
        <DispatcherBar />
        <DispatcherFilterBar />
      </View>
      <View style={styles.articleContainer}></View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryBlack
  },
  appBarContainer: {
    flex: 1,
  },
  articleContainer: {
    flex: 6,
    backgroundColor: colors.gray
  },
})