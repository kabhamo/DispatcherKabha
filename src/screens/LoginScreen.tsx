import { View, Text, Image, StyleSheet, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import DispatcherButton from '../components/DispatcherButton'
import { Dimensions } from 'react-native'
import { colors } from '../util/colors'
import { RouteProp, useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PasswordComponent } from '../components/PasswordComponent'

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const { height, width } = Dimensions.get('screen')
type Props = {
  route: RouteProp<RootStackParamList, 'Login'>
}

const LoginScreen = (props: Props) => {
  const [visibility, setVisibility] = useState<boolean>(true);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const onPresshandler = () => {
    console.log("Handler start")
  }
  const signupHandler = () => {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>

      <View style={{ flex: 1, backgroundColor: colors.primaryBlack }} />

      <View style={styles.imageContainer} >
        <Image
          style={styles.topImage}
          source={require('../assets/LoginImage.png')}
        />
        <Text style={styles.text}> Login </Text>
      </View>

      <View style={styles.inputsContainer} >
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          placeholderTextColor="#5A5A89"
          placeholder='Your email'
        />
        <PasswordComponent placeholder='Password' visibility={visibility} setVisibility={setVisibility} />

        <View style={styles.line}></View>
      </View>

      <View style={styles.btnsContainer}>
        <DispatcherButton
          type='login'
          title="LOGIN"
          backgroundColorStyleType={{ backgroundColor: colors.primaryBlue }}
          textColorStyleType={{ color: colors.white }}
          onPress={() => console.log("login")} />
        <DispatcherButton
          type='signup'
          title="SIGNUP"
          backgroundColorStyleType={{ backgroundColor: colors.gray }}
          textColorStyleType={{ color: colors.primaryBlackTwo }}
          onPress={() => signupHandler()} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputsContainer: {
    flex: 5,
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
  imageContainer: {
    flex: 5,
    alignItems: 'flex-start',
    gap: 15,
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
  line: {
    backgroundColor: colors.gray,
    width: 0.88 * width,
    height: 2,
    marginTop: '10%',
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
  text: {
    marginLeft: 20,
    fontSize: 24,
    lineHeight: 25,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontWeight: "700",
    color: colors.primaryBlackTwo
  },
});

export default LoginScreen