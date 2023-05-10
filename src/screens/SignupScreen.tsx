import {
  View, Text, Image, StyleSheet,
  TextInput, Platform, TouchableOpacity, Dimensions
} from 'react-native'
import React, { useState } from 'react'
import DispatcherButton from '../components/DispatcherButton'
import { colors } from '../util/colors'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;


type Props = {}
const { height, width } = Dimensions.get('screen')

const SignupScreen = (props: Props) => {
  const [visibility, setVisibility] = useState<boolean>(true);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const loginHandler = () => {
    navigation.navigate('Login');
  }

  return (
    <View>
      <View style={styles.header}></View>
      <Image
        style={styles.topImage}
        source={require('../assets/LoginImage.png')}
      />
      <View>
        <Text style={styles.text}>Signup</Text>
      </View>

      <View >
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

        <View>
          <DispatcherButton
            type='signup'
            title="SIGNUP"
            onPress={() => console.log("signup")} />
          <DispatcherButton
            type='login'
            title="LOGIN"
            onPress={loginHandler} />
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: colors.primaryBlack
  },
  topImage: {
    width: width,
    height: height * 0.3,
  },
  inputText: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 20,
    width: "88%",
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 10,
    paddingLeft: 16,
    backgroundColor: "#FFFFFF",
    borderColor: colors.gray,
    color: colors.primaryBlackTwo,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontWeight: '400',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    borderWidth: 2,
    width: "88%",
    backgroundColor: "#FFFFFF",
    borderColor: colors.gray,
    paddingVertical: 11,
    borderRadius: 4,
    marginBottom: 24,
  },
  text: {
    width: 90,
    height: 30,
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 20, //?from the the first inputText
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 22,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontWeight: "700",
    color: colors.primaryBlackTwo
  },
  line: {
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.gray,
    width: 0.88 * width,
    height: 2,
    marginBottom: 36,
    marginTop: 10
  },
});

export default SignupScreen