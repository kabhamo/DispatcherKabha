import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../util/colors'
import { ErrorFirebaseAuthEnum, PasswordEnum } from '../util/enums';
import { ErrorType } from '../util/types';

type Props = {
    placeholder: string,
    type: string
    visibility: boolean,
    error: ErrorType | null
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setRePassword: React.Dispatch<React.SetStateAction<string>>
}
export const PasswordInputComponent: React.FC<Props> = ({ placeholder, type, error, visibility, setVisibility, setPassword, setRePassword }) => {
    const isPasswordError = error &&
        (error.code === ErrorFirebaseAuthEnum.UnmatchedPassword ||
            error.code === ErrorFirebaseAuthEnum.WeakPassword ||
            error.code === ErrorFirebaseAuthEnum.WrongPassword)
    const handlePasswordInput = (input: string) => {
        switch (type) {
            case PasswordEnum.Password:
                setPassword(input);
                break;
            case PasswordEnum.ReinterPassword:
                setRePassword(input)
                break;
            default:
                break;
        }
    }
    return (
        <View>
            <View style={[styles.passwordContainer, { borderColor: isPasswordError ? colors.error : colors.gray }]}>
                <TextInput
                    style={{ fontSize: 20, width: '90%', color: colors.primaryBlackTwo }}
                    autoCapitalize="none"
                    placeholderTextColor={isPasswordError ? colors.error : colors.primaryBlackTwo}
                    placeholder={placeholder}
                    secureTextEntry={!visibility}
                    onChangeText={(input) => handlePasswordInput(input)}
                />

                <TouchableOpacity
                    onPress={() => setVisibility(!visibility)}>
                    {visibility ? <Icon name="eye" color={colors.primaryBlackTwo} size={25} />
                        : <Icon name="eye-off" color={colors.primaryBlackTwo} size={25} />}
                </TouchableOpacity>

            </View>
            {isPasswordError ?
                <Text style={styles.error}>{error.message}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        borderWidth: 2,
        width: "88%",
        backgroundColor: "#FFFFFF",
        paddingVertical: 11,
        borderRadius: 4,
    },
    error: {
        color: colors.error,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
        paddingLeft: 2,
        textAlign: 'center',
    }
})