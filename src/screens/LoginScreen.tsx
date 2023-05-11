import { View, Text, Image, StyleSheet, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import DispatcherButton from '../components/DispatcherButton'
import { Dimensions } from 'react-native'
import { colors } from '../util/colors'
import { PasswordComponent } from '../components/PasswordComponent'
import { AuthNavProps } from '../routes/paramsList/AuthParamList'
import { PasswordEnum } from '../util/enums'
import { firebaseLogin } from '../services/firebaseAuth'

const { height, width } = Dimensions.get('screen')

const LoginScreen: React.FC<AuthNavProps<'Login'>> = ({ navigation, route }: AuthNavProps<'Login'>) => {
  const [visibility, setVisibility] = useState<boolean>(true);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loginHandler = async () => {
    try {
      if (email && password) {
        const userCredential = await firebaseLogin(email, password);
        console.log("Login userCredential: ", userCredential)
      } else {
        //!Error state
        console.log("check email and password")
      }
    } catch (ex) {
      //!Error state
      console.log(`Error while signing in ${ex}`)
    }
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
          onChangeText={(input) => setEmail(input)}
        />
        <PasswordComponent
          placeholder='Password'
          type={PasswordEnum.Password}
          visibility={visibility}
          setVisibility={setVisibility}
          setPassword={setPassword}
          setRePassword={() => ""}
        />

        <View style={styles.line}></View>
      </View>

      <View style={styles.btnsContainer}>
        <DispatcherButton
          type='login'
          title="LOGIN"
          backgroundColorStyleType={{ backgroundColor: colors.primaryBlue }}
          textColorStyleType={{ color: colors.white }}
          onPress={() => loginHandler()} />
        <DispatcherButton
          type='signup'
          title="SIGNUP"
          backgroundColorStyleType={{ backgroundColor: colors.gray }}
          textColorStyleType={{ color: colors.primaryBlackTwo }}
          onPress={() => navigation.navigate('Signup')} />
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