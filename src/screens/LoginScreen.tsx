import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import DispatcherButton from '../components/DispatcherButton';
import auth from '@react-native-firebase/auth';
import { Dimensions } from 'react-native';
import { colors } from '../util/colors';
import { PasswordInputComponent } from '../components/PasswordInputComponent';
import { ErrorFirebaseAuthEnum, PasswordEnum, AsyncLocalStorageKeysType } from '../util/enums';
import { EmailInputComponent } from '../components/EmailInputComponent';
import { ErrorType } from '../util/types';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { userSlice } from '../state/user/userSlice';
import { storeData } from '../services/asyncStorage';
import type { LoginScreenNavigationProp } from '../routes/types/navigationTypes';
import { fetchUserCredential } from '../state/user/userSlice';

const { height, width } = Dimensions.get('screen')

const LoginScreen: React.FC<LoginScreenNavigationProp> = ({ navigation, route }: LoginScreenNavigationProp) => {

  const [visibility, setVisibility] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<ErrorType | null>(null);
  //? ============Redux============
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.value)
  //todo add another dispatcher for the onBoarding, maybe there is no need

  const loginHandler = () => {
    dispatch(fetchUserCredential({ email, password }))
    navigation.navigate('OnBoarding');
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
        <EmailInputComponent
          placeholder='Your email'
          error={error}
          setEmail={setEmail}
        />
        <PasswordInputComponent
          placeholder={PasswordEnum.Password}
          type={PasswordEnum.Password}
          visibility={visibility}
          setVisibility={setVisibility}
          setPassword={setPassword}
          setRePassword={() => ""}
          error={error}
        />

        <View style={styles.line}></View>
        {error &&
          (error.code === ErrorFirebaseAuthEnum.InvalidOperation ||
            error.code === ErrorFirebaseAuthEnum.NetworkError) ?
          <Text style={styles.error}>{error.message}</Text> : null}
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
    flex: 6,
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
    gap: 12,
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
  line: {
    backgroundColor: colors.gray,
    width: 0.88 * width,
    height: 2,
    marginTop: '5%',
  },
  text: {
    marginLeft: 20,
    fontSize: 24,
    lineHeight: 25,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontWeight: "700",
    color: colors.primaryBlackTwo
  },
  error: {
    textAlign: 'center',
    color: colors.error,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    paddingLeft: 2,
    marginTop: -10
  }
});

export default LoginScreen