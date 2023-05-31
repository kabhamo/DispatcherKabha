import React, { useState } from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../util/colors'
import { FavoriteArticle } from '../../util/types'
import Icon from 'react-native-vector-icons/Feather'

type DispatcherFavArticleCardProps = {
    data: FavoriteArticle,
    //index: number,
    onStarClick: (favoriteArticle: FavoriteArticle, isFavoriteArticle: boolean) => Promise<void>
}

export const DispatcherFavArticleCard: React.FC<DispatcherFavArticleCardProps> = ({ data, onStarClick }) => {
    const [isFavoriteArticle, setFavoriteArticle] = useState<boolean>(true)

    const onPressHandler = () => {
        setFavoriteArticle(false)
        onStarClick(data, false)
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: data.urlToImage }}
                />
                <TouchableOpacity
                    style={styles.close}
                    onPress={() => onPressHandler()}>
                    <Icon style={isFavoriteArticle ? { opacity: 1 } : { opacity: 0.5 }} name='star' size={27} color={colors.white} />
                </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Text adjustsFontSizeToFit numberOfLines={5} style={styles.title}>{data.title}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: colors.gray,
        borderRadius: 10,
        borderWidth: 2,
    },
    imageContainer: {
        flex: 5,
        margin: 1,

    },
    titleContainer: {
        flex: 8,
        marginTop: '2%',
        marginHorizontal: '2%',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        textAlign: 'justify',
        fontWeight: '500',
        color: colors.primaryBlack,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    image: {
        width: '100%',
        height: '100%',
        borderColor: colors.grayDark,
        borderRadius: 10,
        borderWidth: 1,
    },
    close: {
        felx: 1,
        backgroundColor: colors.gray,
        //margin: '2%',
        position: "absolute",
        //left: '88%',
    }
})