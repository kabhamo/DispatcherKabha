import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppBar, HStack, IconButton } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../util/colors';

type DispatcherFilterBarProps = {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
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

function SlidersSortButton({ setOpenDrawer }: DispatcherFilterBarProps): JSX.Element {
    return (
        <TouchableOpacity
            onPress={() => setOpenDrawer(true)}>
            <Icon name="sliders" size={30} color={colors.primaryBlackTwo} />
        </TouchableOpacity>
    )
}

export const DispatcherFilterBar: React.FC<DispatcherFilterBarProps> = ({ setOpenDrawer }) => {
    return (
        <AppBar
            style={styles.InnerFilterBarContainer}
            leading={props => (<SortByButton />)}
            trailing={props => (<SlidersSortButton setOpenDrawer={setOpenDrawer} />)}
        />
    );
}

const styles = StyleSheet.create({
    InnerFilterBarContainer: {
        flex: 1,
        backgroundColor: colors.grayWhite,
        height: '40%',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: colors.gray
    }
})