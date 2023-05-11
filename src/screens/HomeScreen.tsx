import { StyleSheet, Text, View, Dimensions, Platform, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DispatcherButton from '../components/DispatcherButton'
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../util/colors'

type Props = {}
const { height, width } = Dimensions.get('screen')

const HomeScreen = (props: Props) => {
  const [visibility, setVisibility] = useState<boolean>(true);
  return (
    <View style={styles.container}>

      <View style={{ flex: 1, backgroundColor: colors.primaryBlack }} />

      <View style={{ flex: 5 }} >
        <Image
          style={styles.topImage}
          source={require('../assets/LoginImage.png')}
        />
      </View>

      <View style={styles.inputsContainer} >
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          placeholderTextColor="#5A5A89"
          placeholder='Your email'
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={{ fontSize: 20, width: '90%', color: colors.primaryBlackTwo }}
            autoCapitalize="none"
            placeholderTextColor="#5A5A89"
            placeholder='Password'
            secureTextEntry={!visibility}
          />
          <TouchableOpacity
            onPress={() => setVisibility(!visibility)}>
            {visibility ? <Icon name="eye" color={colors.primaryBlackTwo} size={25} />
              : <Icon name="eye-off" color={colors.primaryBlackTwo} size={25} />}
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={{ fontSize: 20, width: '90%', color: colors.primaryBlackTwo }}
            autoCapitalize="none"
            placeholderTextColor="#5A5A89"
            placeholder='Re-Enter Password'
            secureTextEntry={!visibility}
          />
          <TouchableOpacity
            onPress={() => setVisibility(!visibility)}>
            {visibility ? <Icon name="eye" color={colors.primaryBlackTwo} size={25} />
              : <Icon name="eye-off" color={colors.primaryBlackTwo} size={25} />}
          </TouchableOpacity>
        </View>

        <View style={styles.line}></View>
      </View>

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
    justifyContent: 'center',
    alignItems: "center",
    gap: 20,
    //backgroundColor: 'darkorange',
  },
  btnsContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: 'center',
    gap: 20,
    //backgroundColor: 'green',
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
  line: {
    backgroundColor: colors.gray,
    width: 0.88 * width,
    height: 2,
    //marginTop: '10%',
  },
  inputText: {
    fontSize: 20,
    width: "88%",
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 11,
    paddingLeft: 16,
    backgroundColor: "#FFFFFF",
    borderColor: colors.gray,
    color: colors.primaryBlackTwo,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontWeight: '400',
  },
  passwordContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
    borderWidth: 2,
    width: "88%",
    backgroundColor: "#FFFFFF",
    borderColor: colors.gray,
    paddingVertical: 11,
    borderRadius: 4,
  },
})