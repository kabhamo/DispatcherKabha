import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../util/colors'

type Props = {
    placeholder: string,
    visibility: boolean,
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}
export const PasswordComponent: React.FC<Props> = ({ placeholder, visibility, setVisibility }) => {
    return (
        <View style={styles.passwordContainer}>
            <TextInput
                style={{ fontSize: 20, width: '90%', color: colors.primaryBlackTwo }}
                autoCapitalize="none"
                placeholderTextColor="#5A5A89"
                placeholder={placeholder}
                secureTextEntry={!visibility}
            />
            <TouchableOpacity
                onPress={() => setVisibility(!visibility)}>
                {visibility ? <Icon name="eye" color={colors.primaryBlackTwo} size={25} />
                    : <Icon name="eye-off" color={colors.primaryBlackTwo} size={25} />}
            </TouchableOpacity>
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
        borderColor: colors.gray,
        paddingVertical: 11,
        borderRadius: 4,
    },
})