import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import React from 'react'
import { colors } from '../../util/colors'
import { ErrorFirebaseAuthEnum } from '../../util/enums'
import { ErrorType } from '../../util/types'

type EmailInputComponentProps = {
    placeholder: string,
    error: ErrorType | null
    setEmail: React.Dispatch<React.SetStateAction<string>>,
}
export const EmailInputComponent: React.FC<EmailInputComponentProps> = ({ placeholder, error, setEmail }) => {
    const isEmailError = error &&
        (error.code === ErrorFirebaseAuthEnum.EmailExist ||
            error.code === ErrorFirebaseAuthEnum.InvalidEmail ||
            error.code === ErrorFirebaseAuthEnum.UserNotFound)
    return (
        <View>
            <View style={styles.mainContainer}>
                <TextInput
                    style={[styles.inputText, { borderColor: isEmailError ? colors.error : colors.gray }]}
                    autoCapitalize="none"
                    placeholderTextColor="#5A5A89"
                    placeholder={placeholder}
                    onChangeText={(input) => setEmail(input)}
                />
            </View>
            {isEmailError ?
                <Text style={styles.error}>{error.message}</Text> : null}
        </View>


    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    inputText: {
        fontSize: 20,
        width: "87%",
        borderWidth: 2,
        borderRadius: 4,
        paddingVertical: 11,
        paddingLeft: 16,
        backgroundColor: "#FFFFFF",
        color: colors.primaryBlackTwo,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: '400',
    },
    error: {
        color: colors.error,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
        width: 300
        //paddingLeft: 2
    }
})