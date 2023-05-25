import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../util/colors';
import { ArticleResponse } from '../../util/types';
import { DispatcherArticleButton } from './DispatcherArticleButton';

type DispatcherArticleCardProps = {
    data: ArticleResponse
}

export const DispatcherArticleCard: React.FC<DispatcherArticleCardProps> = ({ data }) => {
    const [date, setDate] = useState<Date>(new Date())
    useEffect(() => {
        if (data.publishedAt) {
            setDate(new Date(data.publishedAt))
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
                <Text adjustsFontSizeToFit numberOfLines={4} style={styles.titleText}>{data.title}</Text>
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
        borderWidth: 1,
        borderColor: colors.grayDark,
        backgroundColor: colors.grayWhite,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    imageContainer: {
        flex: 4,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        backgroundColor: '#B799FF',
    },
    dateTitleSourceContainer: {
        flex: 3,
        paddingTop: '2%',
        paddingLeft: '2%',
        rowGap: 5
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
        textAlign: 'justify',
        fontSize: 15,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
    },
    titleText: {
        color: colors.primaryBlack,
        textAlign: 'left',
        fontSize: 21,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "600",
    },
    smallText: {
        color: colors.primaryBlackThree,
        textAlign: 'justify',
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
        opacity: 0.5
    }
})