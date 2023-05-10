import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import DispatcherButton from '../components/DispatcherButton'
import { colors } from '../util/colors'

type Props = {}
const { height, width } = Dimensions.get('screen')

const HomeScreen = (props: Props) => {
  console.log(height, width)
  return (
    <View style={styles.container}>

      <View style={{ flex: 1, backgroundColor: colors.primaryBlack }} />

      <View style={{ flex: 5, backgroundColor: 'red' }} >
        <Image
          style={styles.topImage}
          source={require('../assets/LoginImage.png')}
        />
      </View>

      <View style={styles.inputsContainer} />

      <View style={styles.btnsContainer}>
        <DispatcherButton
          type='signup'
          title="SIGNUP"
          onPress={() => console.log("signup")} />
        <DispatcherButton
          type='login'
          title="LOGIN"
          onPress={() => console.log("signup")} />
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputsContainer: {
    flex: 7,
    backgroundColor: 'darkorange'
  },
  btnsContainer: {
    flex: 3,
    alignItems: "center",
    backgroundColor: 'green',
    justifyContent: 'center',
    gap: 20
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
})