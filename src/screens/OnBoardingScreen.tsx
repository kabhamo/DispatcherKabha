import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { OnBoardingScreenNavigationProp } from '../routes/types/navigationTypes';

//? should make navigation to AppTabs after "next" or "skip" button click
export const OnBoarding: React.FC<OnBoardingScreenNavigationProp> = ({ navigation, route }: OnBoardingScreenNavigationProp) => {

    const closeOnBoarding = async () => {
        navigation.navigate('Tabs', { screen: 'Home' })
    }

    return (
        <View style={styles.mainContainer}>
            <Text>OnBoardingScreen</Text>
            <TouchableOpacity
                onPress={() => closeOnBoarding()}>
                <Text>Skip</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})