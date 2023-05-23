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
                <HStack >
                    <TouchableOpacity
                        style={styles.btnTextContainer}
                        onPress={() => console.log("Edit my profile")}
                    >
                        <Text style={styles.titleText}>Hi User</Text>
                        <Text style={styles.editText}>Edit my profile</Text>
                    </TouchableOpacity>
                </HStack>
            )}
            trailing={props => (
                <TouchableOpacity
                    onPress={() => console.log("Change Avatar Image")}>
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
    btnTextContainer: {
        height: '100%',
        marginBottom: '20%',
        justifyContent: "center",
        gap: 8,
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