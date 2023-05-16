import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppBar, HStack, IconButton } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../util/colors';

type DispatcherFilterBarProps = {

}

function SortByButton(): JSX.Element {
    return (
        <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => true}>
            <Text style={{ fontWeight: '600', fontSize: 18, color: colors.primaryBlackTwo }}>Sort by</Text>
            <Icon name="chevron-down" color={colors.primaryBlackTwo} size={28} />
        </TouchableOpacity>
    )
}

export const DispatcherFilterBar: React.FC<DispatcherFilterBarProps> = ({ }) => {
    return (
        <AppBar
            style={styles.InnerFilterBarContainer}
            leading={props => (<SortByButton />)}
            trailing={props => (
                <IconButton
                    icon={props => <Icon name="sliders" size={30} color={colors.primaryBlackTwo} />}
                    {...props}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    InnerFilterBarContainer: {
        backgroundColor: colors.grayWhite,
        height: '40%',
        justifyContent: 'center'

    }
})