import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../util/colors'
import { FavoriteArticles } from '../../util/types'

type DispatcherFavArticleCardProps = {
    data: FavoriteArticles
}

export const DispatcherFavArticleCard: React.FC<DispatcherFavArticleCardProps> = ({ data }) => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: data.imageUrl }}
                />
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
})