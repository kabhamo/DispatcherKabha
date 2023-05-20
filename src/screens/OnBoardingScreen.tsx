import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { OnBoardingScreenNavigationProp } from '../routes/types/navigationTypes';
import Onboarding from 'react-native-onboarding-swiper';
import { colors } from '../util/colors';
import * as Progress from 'react-native-progress';


//? should make navigation to AppTabs after "next" or "skip" button click
export const OnBoarding: React.FC<OnBoardingScreenNavigationProp> = ({ navigation, route }: OnBoardingScreenNavigationProp) => {
    const [progressState, setProgress] = useState<number>(0);
    const [indeterminate, setIndeterminate] = useState<boolean>(true);

    const closeOnBoarding = async () => {
        //navigation.navigate('Drawer', { screen: 'SearchIn' } )
    }
    useEffect(() => {
        let progress = 0;
        setProgress(progress);
        setTimeout(() => {
            setIndeterminate(false);
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                setProgress(progress);
            }, 500)
        }, 1500)
    }, [])

    const Test = () => {
        return (
            <View>
                <Progress.Bar
                    //style={styles.progressBarContainer}
                    progress={progressState}
                    indeterminate={indeterminate}
                    width={200}
                    color={colors.error}
                    borderColor={colors.primaryBlackThree}
                    unfilledColor={colors.primaryBlackThree}
                    //useNativeDriver={true}
                    animationType={'timing'}
                />
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 1, backgroundColor: colors.error }} />
            <View style={styles.progressBarContainer}>
                <Test />
            </View>
            <View style={styles.onBoardingContainer}>
                <Onboarding
                    pages={[
                        {
                            backgroundColor: colors.primaryBlack,
                            image: <View><Text>First</Text></View>,
                            title: 'Dispatcher',
                            subtitle: 'Search your fields of intrest and the best part..',
                        },
                        {
                            backgroundColor: colors.gray,
                            image: <View><Text>Seconde</Text></View>,
                            title: 'Dispatcher',
                            subtitle: 'Save all your articles for later, filter, learn and explore the lates news',
                        },
                    ]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        //alignItems: 'center',
    },
    progressBarContainer: {
        flex: 3,
        //flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.primaryBlack
    },
    onBoardingContainer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: "center",
    },
    progressAnimation: {

    }

})