import { View, Text, SafeAreaView, Image, StyleSheet, TextInput} from 'react-native'
import React, { useRef, useEffect, useState } from 'react'

type Props = {}

const LoginScreen = (props: Props) => {
  const textInputRef = useRef<any>(null); 

  useEffect(() => { 
    console.log((textInputRef.current.backgroundColor))
    textInputRef.current.focus()
    //console.log(textInputRef.current.backgroundColor)
    //textInputRef.current.style.backgroundColor = 'red'
  },[textInputRef])
  return (
    <SafeAreaView>
      <Image
        style={styles.topImage}
        source={require('../assets/splashImage.png')}
      />
      <Text>LoginScreen</Text>
      <TextInput
        ref={textInputRef}
        //onBlur={()=>textInputRef.current.placeholderTextColor = 'red'}
        style={styles.inputText}
        autoCapitalize="none"
        placeholderTextColor="#5A5A89"
        placeholder='Email'
      />
      <TextInput
        style={styles.inputText}
        autoCapitalize="none"
        placeholderTextColor="#5A5A89"
        placeholder='Password'
        onPressIn={() => { }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  topImage: {
    width: '100%',
    height: '50%',
  },
  inputText: {
    fontSize: 20,
    margin: 8,
    width: "88%",
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: "white",
  },
});

export default LoginScreen