import { View, Text, StyleSheet, Platform, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import { colors } from '../util/colors';
import Icon from 'react-native-vector-icons/Feather'

type DispatcherArticalButtonProps = {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void) | undefined,
}
export const DispatcherArticalButton: React.FC<DispatcherArticalButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.btn]}
            onPress={onPress}>
            <Text style={[styles.text]}>{title}</Text>
            <Icon name="arrow-right" size={30} color={colors.white} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: colors.primaryBlue,
        padding: '1%'
    },
    text: {
        width: '80%',
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
    }
})