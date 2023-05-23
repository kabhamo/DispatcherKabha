import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { AppBar, Avatar, HStack } from '@react-native-material/core';
import { colors } from '../../util/colors';
import Icon from 'react-native-vector-icons/Feather';


//todo make custom logic to the avatar picture
//todo "edit my profile btn make it's height big"
type ProfileAppBarProps = {}

export const ProfileAppBar: React.FC<ProfileAppBarProps> = ({ }) => {
    return (
        <AppBar style={styles.InnerBarContainer}
            leading={(props) => (
                <HStack style={{ flex: 1, flexDirection: 'column', rowGap: 8 }}>
                    <Text style={styles.titleText}>Hi User</Text>
                    <Text style={styles.editText}>Edit my profile btn</Text>
                </HStack>
            )}
            trailing={props => (
                <TouchableOpacity
                    onPress={() => console.log("Avatar")}>
                    <Avatar
                        color={colors.gray}
                        size={60}
                        icon={props => <Icon name="user" size={30} color={colors.white} />} />
                </TouchableOpacity>
            )}>
        </AppBar>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InnerBarContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    titleText: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: '600',
        color: colors.primaryBlackThree,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    editText: {
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '500',
        color: colors.primaryBlackThree,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    }

})