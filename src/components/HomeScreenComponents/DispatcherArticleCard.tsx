import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../util/colors';
import { ArticleResponse, FavoriteArticle } from '../../util/types';
import { DispatcherArticleButton } from './DispatcherArticleButton';
import { useAppSelector } from '../../hooks/reduxHooks';

type DispatcherArticleCardProps = {
    data: ArticleResponse,
    index: number,
    onStarClick: (favoriteArticle: FavoriteArticle, isFavoriteArticle: boolean) => Promise<void>
}

const { width, height } = Dimensions.get('screen');

export const DispatcherArticleCard: React.FC<DispatcherArticleCardProps> = ({ data, index, onStarClick }) => {
    const [isFavoriteArticle, setFavoriteArticle] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        data.publishedAt && setDate(new Date(data.publishedAt))
    }, [])

    const onPressHandler = () => {
        setFavoriteArticle(!isFavoriteArticle)
        onStarClick(
            {
                id: index,
                title: data.title,
                urlToImage: data.urlToImage,
                publishedAt: data.publishedAt,
                isFavoriteArticle: !isFavoriteArticle
            },
            isFavoriteArticle
        )
    }
    return (
        <View style={styles.mainContainer}>

            <View style={styles.imageContainer}>
                <Image style={[styles.imageContainer, { height: height * 0.21 }]} source={{ uri: data.urlToImage }} />
                <TouchableOpacity
                    style={styles.close}
                    onPress={() => onPressHandler()}>
                    <Icon style={isFavoriteArticle ? { opacity: 1 } : { opacity: 0.5 }} name='star' size={27} color={colors.white} />
                </TouchableOpacity>
            </View>

            <View style={styles.dateTitleSourceContainer}>
                <Text style={styles.smallText}>{date.toUTCString()}</Text>
                <Text adjustsFontSizeToFit numberOfLines={4} style={styles.titleText}>{data.title}</Text>
                <Text style={styles.smallText}>{data.source.name}</Text>
            </View>

            <View style={styles.contentBtnContainer}>
                <View style={styles.contentTextContainer}>
                    <Text allowFontScaling numberOfLines={5} style={styles.contentText}>{data.content}</Text>
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
        //flex: 1,
        margin: '5%',
        marginTop: 0,
        borderWidth: 1,
        borderColor: colors.grayDark,
        backgroundColor: colors.grayWhite,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageContainer: {
        //flex: 4,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        backgroundColor: '#B799FF',
    },
    dateTitleSourceContainer: {
        //flex: 3,
        paddingTop: '2%',
        paddingLeft: '2%',
        rowGap: 5
    },
    contentBtnContainer: {
        //flex: 5,
        rowGap: 20,
        paddingVertical: '5%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    btnContainer: {
        //flex: 2,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    contentTextContainer: {
        //flex: 6,
        paddingLeft: '2%',
    },
    contentText: {
        fontSize: 15,
        textAlign: 'left',
        color: colors.primaryBlackTwo,
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
    },
    close: {
        margin: '2%',
        position: "absolute",
        left: '88%',
    }
})