import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../util/colors';

type DispatcherArticleCardProps = {

}

const testArticle = {
    "source": {
        "id": null,
        "name": "Daily Mail"
    },
    "author": "Luke Andrews",
    "title": "Six women reverse-aged themselves by up to 11 years following this 8-week diet - Daily Mail",
    "description": "Researchers at the University of Virginia found that simple diet, exercise and sleep tweaks can reverse someone's biological age. The study involved six women.",
    "url": "https://www.dailymail.co.uk/health/article-12085363/Six-women-reverse-aged-11-years-following-8-week-diet.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2023/05/15/18/71014027-0-image-a-16_1684170537439.jpg",
    "publishedAt": "2023-05-15T16:09:00Z",
    "content": "Scientists claim that simple tweaks to diet, exercise and sleep could wind back a person's biological age in as little as eight weeks.\r\nResearchers at the University of Virginia tasked six healthy wo… [+5956 chars]"
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