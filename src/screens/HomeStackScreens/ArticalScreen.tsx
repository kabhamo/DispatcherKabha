import { View, Text, StyleSheet, Dimensions, Image, Platform, ScrollView } from 'react-native'
import React from 'react'
import { ArticalScreenNavigationProp } from '../../routes/types/navigationTypes';
import { Article } from '../../util/types';
import { colors } from '../../util/colors';

const { width, height } = Dimensions.get('screen');

export const ArticalScreen: React.FC<ArticalScreenNavigationProp> = ({ navigation, route }: ArticalScreenNavigationProp) => {
    const article: Article = route.params.article;
    console.log(article.content)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={[styles.imageContainer, { height: height * 0.21 }]} source={{ uri: article.urlToImage }} />
            </View>
            <View style={styles.dateTitleSourceContainer}>
                <Text style={styles.smallText}>{article.publishedAt}</Text>
                <Text adjustsFontSizeToFit numberOfLines={4} style={styles.titleText}>{article.title}</Text>
                <Text style={styles.smallText}>{article.source.name}</Text>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView>
                    <Text style={styles.contentText}>{article.content}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageContainer: {
        flex: 3,
        backgroundColor: 'pink'
    },
    dateTitleSourceContainer: {
        flex: 2,
        paddingTop: '2%',
        paddingLeft: '2%',
        rowGap: 5
    },
    contentContainer: {
        paddingLeft: '2%',
        flex: 6,
    },
    contentText: {
        fontSize: 15,
        textAlign: 'left',
        color: colors.primaryBlackTwo,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
    },
    smallText: {
        color: colors.primaryBlackThree,
        textAlign: 'justify',
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
        opacity: 0.5
    },
    titleText: {
        color: colors.primaryBlack,
        textAlign: 'left',
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "600",
    },
})