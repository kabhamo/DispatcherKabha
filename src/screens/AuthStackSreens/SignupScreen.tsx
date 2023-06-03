import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text, View
} from 'react-native';
import DispatcherButton from '../../components/AuthScreenComponents/DispatcherButton';
import { EmailInputComponent } from '../../components/AuthScreenComponents/EmailInputComponent';
import { PasswordInputComponent } from '../../components/AuthScreenComponents/PasswordInputComponent';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { SignupScreenNavigationProp } from '../../routes/types/navigationTypes';
import { fetchUserCredential } from '../../store/user/userSlice';
import { colors } from '../../util/colors';
import { ErrorFirebaseAuthEnum, LoadingStatus, PasswordEnum } from '../../util/enums';
import { SerializedError } from '../../util/types';

const { height, width } = Dimensions.get('screen')

const SignupScreen: React.FC<SignupScreenNavigationProp> = ({ navigation, route }: SignupScreenNavigationProp) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [error, setError] = useState<SerializedError | null>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    if (user.error.code || user.error.message) {
      setError(user.error)
    }
  }, [user])

  const signinHandler = async () => {
    try {
      await dispatch(fetchUserCredential({ email, password, rePassword })).unwrap()
      navigation.navigate('OnBoarding');
    } catch (ex) {
      console.log("Error at signinHandler ", ex)
    }
  }


  return (
    <View style={styles.container}>

      <View style={{ flex: 1, backgroundColor: colors.primaryBlack }} />

      <View style={styles.imageContainer} >
        <Image
          style={styles.topImage}
          source={require('../../assets/LoginImage.png')}
        />
        <Text style={styles.text}> Signup </Text>


      </View>

      <KeyboardAvoidingView behavior="padding" style={styles.inputsContainer}  >
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
        <PasswordInputComponent
          placeholder={PasswordEnum.ReinterPassword}
          type={PasswordEnum.ReinterPassword}
          visibility={visibility}
          setVisibility={setVisibility}
          setPassword={() => ""}
          setRePassword={setRePassword}
          error={error}
        />
        <View style={styles.line}></View>
        {error &&
          (error.code === ErrorFirebaseAuthEnum.InvalidOperation ||
            error.code === ErrorFirebaseAuthEnum.NetworkError ||
            error.code === ErrorFirebaseAuthEnum.RequestsExceeded) ?
          <Text style={styles.error}>{error.message}</Text> : null}

      </KeyboardAvoidingView>

      <View style={styles.btnsContainer}>
        {user.loading === LoadingStatus.Pending ?
          <Lottie source={require('../../assets/jsons/loadingActivity.json')} autoPlay loop />
          :
          <>
            <DispatcherButton
              title="SIGNUP"
              backgroundColorStyleType={{ backgroundColor: colors.primaryBlue }}
              textColorStyleType={{ color: colors.white }}
              onPress={() => signinHandler()} />
            <DispatcherButton
              title="LOGIN"
              backgroundColorStyleType={{ backgroundColor: colors.gray }}
              textColorStyleType={{ color: colors.primaryBlackTwo }}
              onPress={() => navigation.navigate('Auth', { screen: 'Login' })} />
          </>
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputsContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: "center",
    gap: 15,
  },
  btnsContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: 'center',
    gap: 20,
  },
  imageContainer: {
    flex: 5,
    alignItems: 'flex-start',
    gap: 10,
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

export default SignupScreen