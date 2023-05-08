import { StyleProp, StyleSheet, TextInput, TextInputProps, ViewStyle } from 'react-native'
import React from 'react'

type DispatcherInputTextProps = {
  secure: boolean,
  placeholder:string,
  styleInput?: StyleProp<ViewStyle>,
}

const DispatcherInputText = ({ secure,placeholder, styleInput, ...rest }:DispatcherInputTextProps) => {
  return (
    <TextInput
        {...rest}
        style={[styles.input, styleInput]}
        autoCapitalize="none"
        secureTextEntry={secure}
        //textContentType={type}
        placeholder={ placeholder}
        placeholderTextColor="#746dff"
    />
  )
}

export default DispatcherInputText

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        color: "#6c63ff",
        margin: 8,
        width: "88%",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#6c63ff",
        paddingVertical: 15,
        paddingLeft: 20,
        backgroundColor: "white",
    },
})