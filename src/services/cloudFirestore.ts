import firestore from '@react-native-firebase/firestore';
import { getData } from './asyncStorage';
import { AsyncLocalStorageKeysType } from '../util/enums';
import { FavoriteArticle, UserCredential } from '../util/types';

//todo remove getData and add it to the slice and send as param

//Get the uid from the asyncStorage and get/create a document named uid
//finally, push the favorite article input to uid-document inside favoriteArticles array field
export const addFavoriteArticleByUserId = async ({ id, title, urlToImage, publishedAt }: FavoriteArticle, uid: string) => {
    try {
        //get the data
        const userDocument = firestore().collection('Users').doc(uid);
        const data = (await userDocument.get()).data()
        //if first time add an empty array
        const input: FavoriteArticle[] = data?.favoriteArticles ? data?.favoriteArticles : [];

        let isDataExist: boolean = false;
        //check the data exist
        if (data && data.favoriteArticles) { 
            //check if the new article is already added
            isDataExist = data?.favoriteArticles.some((article : FavoriteArticle) => article.id === id)
            if (!isDataExist) { 
                //add the new data to the array input
                input.push({ id, title, urlToImage, publishedAt });
                //adding the array
                await userDocument.set({favoriteArticles: input});
            }
        } else {
            //If it is first time and data dose not exist, create new one
            input.push({ id, title, urlToImage, publishedAt });
            await userDocument.set({favoriteArticles: input});
        }
        return true
    } catch (ex) { 
        console.log(ex)
        return ex;
    }
}

export const removeFavoriteArticleByUserId = async (id: number | null, uid: string) => { 
    //get the data
    const userDocument = firestore().collection('Users').doc(uid);
    const data = (await userDocument.get()).data()
    //if first time add an empty array
    let input: FavoriteArticle[] = data?.favoriteArticles ? data?.favoriteArticles : [];
    //filter the input from the removed article
    input = input.filter((article: FavoriteArticle) => article.id !== id)
    //update the data
    const result = await userDocument.update({ favoriteArticles: input });
    
    return result;
}