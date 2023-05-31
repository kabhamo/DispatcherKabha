import firestore from '@react-native-firebase/firestore';
import { getLocalData, removeLocalValue, storeLocalData } from './asyncStorage';
import { AsyncLocalStorageKeysType } from '../util/enums';
import { FavoriteArticle, UserCredential } from '../util/types';

//todo remove getData and add it to the slice and send as param

//Get the uid from the asyncStorage and get/create a document named uid
//finally, push the favorite article input to uid-document inside favoriteArticles array field
export const addFavoriteArticleByUserId = async ({ id, title, urlToImage, publishedAt }: FavoriteArticle, uid: string) => {
    //create a data cariable for favorite articles
    const newLocalFavoriteArticles: FavoriteArticle[] = [];
    //get all the favorite articles
    const currentLocalFavoriteArticles = await getLocalData(AsyncLocalStorageKeysType.FavoriteArticle);
    const dataToAdd = currentLocalFavoriteArticles ? currentLocalFavoriteArticles : [];
    newLocalFavoriteArticles.push(...dataToAdd)
    newLocalFavoriteArticles.push({ id, title, urlToImage, publishedAt })
    //save the favArticle to the localStorage
    await storeLocalData(AsyncLocalStorageKeysType.FavoriteArticle, newLocalFavoriteArticles)
        
    console.log("array: ", newLocalFavoriteArticles)
    //get the relevent document instance
    const userDocument = firestore().collection('Users').doc(uid);
    //update the data to the firestore
    await userDocument.set({ favoriteArticles: await getLocalData(AsyncLocalStorageKeysType.FavoriteArticle) });
    // return from localStorage
    return newLocalFavoriteArticles
}

export const removeFavoriteArticleByUserId = async (id: number | null, uid: string) => { 
    //create a data cariable for favorite articles
    let newLocalFavoriteArticles: FavoriteArticle[] = [];
    //get all the articles from localStorage
    const currentLocalFavoriteArticles : FavoriteArticle[] = await getLocalData(AsyncLocalStorageKeysType.FavoriteArticle);
    //filter/delete the currentLocalFavoriteArticles
    newLocalFavoriteArticles = currentLocalFavoriteArticles.filter((article: FavoriteArticle) => article.id !== id)
    //update the newLocalFavoriteArticles to the localStorage
    await storeLocalData(AsyncLocalStorageKeysType.FavoriteArticle, newLocalFavoriteArticles)
    console.log(await getLocalData(AsyncLocalStorageKeysType.FavoriteArticle))
    //get the relevent document instance
    const userDocument = firestore().collection('Users').doc(uid);
    //update the data to the firestore
    await userDocument.update({ favoriteArticles: newLocalFavoriteArticles });
    
    return newLocalFavoriteArticles;
}


export const getFavoriteArticleByUserId = async (uid: string) => { 
    let currentLocalFavoriteArticles: FavoriteArticle[] = [];
    currentLocalFavoriteArticles = await getLocalData(AsyncLocalStorageKeysType.FavoriteArticle);
    console.log("is current ", currentLocalFavoriteArticles)
    return currentLocalFavoriteArticles;
}