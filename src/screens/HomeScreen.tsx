import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TapNavProps } from '../routes/paramsList/AppParamList';
import { colors } from '../util/colors';
import { DispatcherBar } from '../components/DispatcherBar';
import { DispatcherFilterBar } from '../components/DispatcherFilterBar';
import { DispatcherArticleCard } from '../components/DispatcherArticleCard';

const Drawer = createDrawerNavigator();

type HomeScreenProps = {}


export const HomeScreen: React.FC<TapNavProps<'Home'>> = ({ navigation }) => {


  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appBarContainer}>
        <DispatcherBar />
        <DispatcherFilterBar />
      </View>
      <View style={styles.articleContainer}>
        <Text>Last Login</Text>
        <Text>Top Headlines in UK</Text>
        <DispatcherArticleCard />
      </View>
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
    flex: 5,
    backgroundColor: colors.gray
  },
})