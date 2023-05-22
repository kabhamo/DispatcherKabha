import axios, { AxiosResponse } from 'axios';
import { getConfig } from '../../config/config';
import { AsyncLocalStorageKeysType } from '../util/enums';
import type { ArticleResponse, UserCredential } from '../util/types';
import { getData, storeData } from './asyncStorage';
import { fetchUserCredential } from '../state/user/userSlice';
import auth from '@react-native-firebase/auth';

axios.defaults.baseURL = getConfig().general.baseURL;

export const loginAndSetUserCredential = async (email: string, password: string) => { 
    let payloadUserCredential: UserCredential = { email: "", token: "", isLoggedIn: false };
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const idToken = await userCredential.user.getIdToken();
    if (userCredential && userCredential.user.email && idToken) { 
        payloadUserCredential = {
            email: userCredential.user.email,
            token: idToken,
            isLoggedIn: true
        }
    }
    await storeData(AsyncLocalStorageKeysType.UserAuthKey, payloadUserCredential);
    const isOnBoarding = await getData(AsyncLocalStorageKeysType.OnBoardingKey)
    if (isOnBoarding === null) {
        await storeData(AsyncLocalStorageKeysType.OnBoardingKey, true);
    } else { 
        await storeData(AsyncLocalStorageKeysType.OnBoardingKey, false);
    }
    return payloadUserCredential;
}