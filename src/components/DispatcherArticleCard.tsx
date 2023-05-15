import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../util/colors';

type DispatcherArticleCardProps = {

}
export const DispatcherArticleCard: React.FC<DispatcherArticleCardProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                {/* Image and Star btn icon */}
            </View>
            <View style={styles.dateTitleSourceContainer}>
                {/* date of the article and filters at the end of the row */}
                {/* The Article Title */}
                {/* source */}
            </View>
            <View style={styles.contentBtnContainer}>
                {/* content */}
                {/* btn to open the full artical */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: '4%',
    },
    imageContainer: {
        flex: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#B799FF',
    },
    dateTitleSourceContainer: {
        flex: 3,
        backgroundColor: '#ACBCFF'
    },
    contentBtnContainer: {
        flex: 5,
        backgroundColor: '#B3C890',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    //btnContainer: {
    //    flex: 2,
    //    backgroundColor: '#1B9C85',
    //    borderBottomLeftRadius: 20,
    //    borderBottomRightRadius: 20,
    //},
})