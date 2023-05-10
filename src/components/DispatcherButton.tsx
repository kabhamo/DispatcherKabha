import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent, Platform } from 'react-native'
import React from 'react'
import { colors } from '../util/colors'

type Props = {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void) | undefined,
    type: 'signup' | 'login'
}

const DispatcherButton = (props: Props) => {
    const backgroundColorStyleType = {
        backgroundColor: props.type === 'login' ? colors.primaryBlue : colors.gray,
    }
    const textColorStyleType = {
        color: props.type === 'login' ? colors.white : colors.primaryBlackTwo
    }
    return (
        //<View style={styles.container}>
        <TouchableOpacity
            style={[styles.btn, backgroundColorStyleType]}
            onPress={props.onPress}>
            <Text style={[styles.text, textColorStyleType]}>{props.title}</Text>
        </TouchableOpacity>
        //</View>
    )
}

export default DispatcherButton

const styles = StyleSheet.create({
    //container: {
    //    alignItems: "center",
    //    margin: 10,
    //},
    btn: {
        width: '88%',
        textAlign: 'center',
        padding: 12,
        //marginBottom: 15,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.primaryBlue
    },
    text: {
        width: 85,
        height: 20,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
    }
})