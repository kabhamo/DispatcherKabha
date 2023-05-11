import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

type HomeScreenProps = {

}
export const HomeScreen: React.FC<HomeScreenProps> = ({ }) => {
  return (
    <View style={styles.mainContainer}>
      <Text>HomeScreen</Text>
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