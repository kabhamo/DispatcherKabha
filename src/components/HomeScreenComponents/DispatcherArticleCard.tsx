import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../util/colors';
import { ARTICLE } from '../../util/constants';
import { ArticleResponse } from '../../util/types';
import { DispatcherArticleButton } from './DispatcherArticleButton';

type DispatcherArticleCardProps = {
    data: ArticleResponse
}

export const DispatcherArticleCard: React.FC<DispatcherArticleCardProps> = ({ data }) => {
    const [date, setDate] = useState<Date>(new Date())
    useEffect(() => {
        if (ARTICLE.publishedAt) {
            setDate(new Date(ARTICLE.publishedAt))
            console.log(date.toUTCString())
        }
    }, [])

    return (
        <View style={styles.mainContainer}>

            <View style={styles.imageContainer}>
                <Image style={styles.imageContainer} source={{ uri: data.urlToImage }} />
            </View>

            <View style={styles.dateTitleSourceContainer}>
                <Text style={styles.smallText}>{date.toUTCString()}</Text>
                <Text style={styles.titleText}>{data.title}</Text>
                <Text style={styles.smallText}>{data.source.name}</Text>
            </View>

            <View style={styles.contentBtnContainer}>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentText}>{data.content}</Text>
                </View>
                <View style={[styles.btnContainer]}>
                    <DispatcherArticleButton
                        title='NAVIGATE TO DISPATCH'
                        onPress={() => console.log("NAVIGATE")} />
                </View>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: '5%',
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    imageContainer: {
        flex: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#B799FF',
    },
    dateTitleSourceContainer: {
        flex: 3,
    },
    contentBtnContainer: {
        flex: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    btnContainer: {
        flex: 2,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    contentTextContainer: {
        flex: 6,
    },
    contentText: {
        color: colors.primaryBlackTwo,
        padding: '2%',
        textAlign: 'justify',
        fontSize: 15,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
    },
    titleText: {
        color: colors.primaryBlack,
        padding: '2%',
        textAlign: 'justify',
        fontSize: 21,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "600",
    },
    smallText: {
        color: colors.primaryBlackThree,
        textAlign: 'justify',
        paddingLeft: '2%',
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
        opacity: 0.5
    }
})