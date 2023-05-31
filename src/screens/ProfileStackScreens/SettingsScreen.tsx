import { View, Text, StyleSheet, Platform, Dimensions, } from 'react-native'
import React from 'react'
import { colors } from '../../util/colors';

type SettingsScreenProps = {

}

const { height, width } = Dimensions.get('screen');

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Settings</Text>
            </View>

            <View style={styles.searchResultsContainer}>
                <View style={styles.titleInnerContainer}>
                    <Text style={styles.searchResultsTitle}>Search Results</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.saveFiltersInnerContainer}>
                    {/* Save filters CheckBox */}
                </View>
                <View style={styles.saveSearchResultsInnerContainer}>
                    {/* Save search results CheckBox */}
                </View>
            </View>

            <View style={styles.appPreferencesContainer}>

                <View style={styles.titleInnerContainer}>
                    <Text style={styles.searchResultsTitle}>App preferences</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.notificationContainer}>
                    {/* Notification CheckBox */}
                </View>

                <View style={styles.languageContainer}>
                    {/* language Options */}
                </View>

            </View>

            <View style={styles.appVersionContainer}><Text style={{ alignSelf: 'center' }}>App version 1.0</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    titleContainer: {
        flex: 2,
        paddingLeft: '3%',
    },
    searchResultsContainer: {
        flex: 10,
        paddingLeft: '3%',
        //backgroundColor: 'pink'
    },
    titleInnerContainer: {},
    saveFiltersInnerContainer: {},
    saveSearchResultsInnerContainer: {},
    appPreferencesContainer: {
        flex: 6,
        paddingLeft: '3%',
        //backgroundColor: 'blue'
    },
    notificationContainer: {},
    languageContainer: {},
    appVersionContainer: {
        flex: 1,
        paddingLeft: '3%',
        justifyContent: 'center',
        //backgroundColor: 'yellow'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        paddingTop: '3%',
        color: colors.primaryBlack,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    searchResultsTitle: {
        fontSize: 15,
        fontWeight: '600',
        paddingTop: '3%',
        color: colors.primaryBlack,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    line: {
        backgroundColor: colors.gray,
        width: 0.88 * width,
        height: 2,
        marginTop: '5%',
    },
})