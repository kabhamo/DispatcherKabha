import { View, Text, StyleSheet, Platform, Switch, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../util/colors';

const { height, width } = Dimensions.get('screen');

export const SettingsSearchResult: React.FC = () => {
    const [saveFilter, setSaveFilter] = useState(false);
    const [saveSearch, setSaveSearch] = useState(false);
    const saveFilterSwitchHandler = () => setSaveFilter(previousState => !previousState);
    const saveSearchSwitchHandler = () => setSaveSearch(previousState => !previousState);
    return (
        <View style={styles.searchResultsContainer}>
            <View style={styles.titleInnerContainer}>
                <Text style={styles.searchResultsTitle}>Search Results</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.saveFiltersInnerContainer}>
                {/* Save filters CheckBox */}
                <View style={{ flexDirection: 'column', rowGap: 10 }}>
                    <Text style={styles.innerText}>Save filters</Text>
                    <Text style={styles.innerDescText}>Allow us to save filters when entring</Text>
                </View>
                <Switch
                    style={{ marginEnd: '10%' }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={saveFilterSwitchHandler}
                    value={saveFilter}
                />
            </View>
            <View style={styles.saveSearchResultsInnerContainer}>
                {/* Save search results CheckBox */}
                <View style={{ flexDirection: 'column', rowGap: 10 }}>
                    <Text style={styles.innerText}>Save search results</Text>
                    <Text style={styles.innerDescText}>Allow us to save your search result</Text>
                </View>
                <Switch
                    style={{ marginEnd: '10%' }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={saveSearchSwitchHandler}
                    value={saveSearch}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchResultsContainer: {
        flex: 8,
        paddingLeft: '3%',
    },
    titleInnerContainer: {},
    saveFiltersInnerContainer: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    saveSearchResultsInnerContainer: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
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
    innerText: {
        fontSize: 17,
        fontWeight: '500',
        color: colors.primaryBlack,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    innerDescText: {
        fontSize: 15,
        color: colors.grayDark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
})