import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { colors } from '../util/colors'
import { PageInterface } from '../util/constants'

type OnBoardingComponentProps = {
    page: PageInterface,
    translateX: Animated.SharedValue<number>,
    index: number,
}

const { width, height } = Dimensions.get('screen');

export const OnBoardingComponent: React.FC<OnBoardingComponentProps> = ({ page: { title, source, description }, translateX, index }) => {
    // here we specify the scrolling animation behavior
    const mainContainerAnimationStyle = useAnimatedStyle(() => {
        const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
        ];
        const opacity = interpolate(
            translateX.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const scale = interpolate(
            translateX.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        return { opacity, transform: [{ scale }] }
    })


    return (

        <Animated.View style={[styles.mainContainer, mainContainerAnimationStyle]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[styles.titleText]}>{title}</Text>
            </View>

            <View style={{ flex: 2, alignItems: 'center' }}>
                <Text style={[styles.text]}>{description}</Text>
            </View>

            <View style={{ flex: 3, }}>

            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: width,
    },
    titleText: {
        fontSize: 30,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "700",
        color: colors.white,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
        color: colors.white,
        textAlign: 'center',
    },
})