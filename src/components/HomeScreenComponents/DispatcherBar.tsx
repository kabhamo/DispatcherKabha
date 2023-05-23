import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AppBar, HStack, IconButton } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../util/colors';

type DispatcherBarProps = {

}
export const DispatcherBar: React.FC<DispatcherBarProps> = ({ }) => {
    return (
        <AppBar
            style={styles.InnerBarContainer}
            leading={props => (
                <View>
                    <Image
                        style={{ width: 45, height: 45, marginBottom: 10, marginLeft: 10 }}
                        source={require('../../assets/ios/LOGO.png')}
                    />
                </View>
            )}
            trailing={props => (
                <HStack style={{ marginBottom: 10, marginLeft: 10 }}>
                    <IconButton
                        icon={props => <Icon name="search" {...props} />}
                        {...props}
                    />
                    <IconButton
                        icon={props => <Icon name="bell" {...props} />}
                        {...props}
                    />
                </HStack>
            )}
        />
    );
}

const styles = StyleSheet.create({
    InnerBarContainer: {
        backgroundColor: colors.primaryBlack,
        height: '60%',
        justifyContent: 'center'
    },
})