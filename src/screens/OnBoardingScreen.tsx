import React, { useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import { ProgressBar } from '../components/OnBoardingComponents/DispatcherProgressBar';
import { OnBoardingComponent } from '../components/OnBoardingComponents/OnBoardingComponent';
import type { OnBoardingScreenNavigationProp } from '../routes/types/navigationTypes';
import { colors } from '../util/colors';
import { PAGES } from '../util/constants';

const { width, height } = Dimensions.get('screen');

export const OnBoarding: React.FC<OnBoardingScreenNavigationProp> = ({ navigation, route }: OnBoardingScreenNavigationProp) => {
    const [translateXState, setTranslateX] = useState<number>(0)
    // to store the scrollHandler Value, init with 0
    // this value will help us to animate the elements inside OnBoardingComponent
    const translateX = useSharedValue(0);
    // help us to handle the scrolling event inside Animated.ScrollView
    const scrollHandler = useAnimatedScrollHandler({
        onScroll(event, context) {
            translateX.value = event.contentOffset.x;
        },
    });
    // to make animation with next button
    const scrollRef = useAnimatedRef<ScrollView>();
    const [nextActiveIndex, setNextActiveIndex] = useState<number>(0)

    const activeIndex = useDerivedValue(() => {
        return Math.round(translateX.value / width);
    });

    const onIconPress = useCallback(() => {
        if (activeIndex.value === PAGES.length - 1) return; //? navigate to home
        setNextActiveIndex(activeIndex.value + 1)
        scrollRef.current?.scrollTo({ x: width * (activeIndex.value + 1) });
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 1, backgroundColor: colors.primaryBlack }} />
            <View style={styles.progressBarContainer}>
                <ProgressBar nextActiveIndex={nextActiveIndex} translateX={translateX} />
            </View>
            <View style={styles.onBoardingContainer}>
                <Animated.ScrollView
                    ref={scrollRef as any}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16} //? each 16ms to get 60fps
                >
                    {PAGES.map((page, index) => {
                        return (
                            <OnBoardingComponent
                                key={index.toString()}
                                page={page}
                                index={index}
                                translateX={translateX}
                            />
                        );
                    })}
                </Animated.ScrollView>
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Drawer', { screen: 'SearchIn', params: { screen: 'Home' } })}
                    style={{
                        height: '70%',
                        justifyContent: 'center',
                        paddingLeft: '5%'
                    }}>
                    <Text style={styles.btnsText}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onIconPress()}
                    style={{
                        flexDirection: 'row',
                        height: '70%',
                        alignItems: 'center',
                    }}>
                    <Text style={styles.btnsText}>Next</Text>
                    <Icon name="chevron-right" color={colors.white} size={28} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    progressBarContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.primaryBlack,
    },
    onBoardingContainer: {
        flex: 14,
        backgroundColor: colors.primaryBlack,
    },
    btnsContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.primaryBlack,
    },
    btnsText: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
        color: colors.white
    },
    progressAnimation: {},

})