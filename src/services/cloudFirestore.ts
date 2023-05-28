import firestore from '@react-native-firebase/firestore';
import { getData } from './asyncStorage';
import { AsyncLocalStorageKeysType } from '../util/enums';
import { FavoriteArticle, UserCredential } from '../util/types';


//Get the uid from the asyncStorage and create a document named uid
//finally, push the favorite article input to uid-document inside favoriteArticles array field
export const addFavoriteArticleByUserId = async ({ title, urlToImage, publishedAt }: FavoriteArticle, uid: string) => {
    //todo we can send the uid instead
    const userCredential: UserCredential = await getData(AsyncLocalStorageKeysType.UserAuthKey);
    console.log("addFavoriteArticleByUserId: ", userCredential.uid)
    const input : FavoriteArticle[] = [];
    input.push({ title, urlToImage, publishedAt });
    const usersCollection = firestore().collection('Users');
    const doc = usersCollection.doc(userCredential.uid)
    console.log("docId: ", doc.id)
    if (doc) {
        console.log("dose exist")
        //const data = (await usersCollection.doc(userCredential.uid).get()).get('favoriteArticles')
        //console.log('data: ', data)
        usersCollection.doc(userCredential.uid).update({
            favoriteArticles: input
        })
    } else {
        console.log("dose not")
        usersCollection.doc(userCredential.uid).set({
            favoriteArticles: input
        })
    }
    
    //const userCollection = await firestore().collection('users').doc(userCredential.uid).set({
    //    favoriteArticles: input
    //});
    //return userCollection;
}