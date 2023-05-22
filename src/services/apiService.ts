import auth from '@react-native-firebase/auth';
import axios from 'axios';
import { getConfig } from '../../config/config';
import { AsyncLocalStorageKeysType, ErrorFirebaseAuthEnum } from '../util/enums';
import type { UserCredential } from '../util/types';
import { getData, storeData } from './asyncStorage';

axios.defaults.baseURL = getConfig().general.baseURL;

export const signUpAndSetUserCredential = async (email: string, password: string, rePassword?: string) => { 
    if (rePassword && password !== rePassword) {
        throw new Error(ErrorFirebaseAuthEnum.UnmatchedPassword);
    }
    let payloadUserCredential: UserCredential = { email: "", token: "", isLoggedIn: false };
    let userCredential;
    if (rePassword) {
        userCredential = await auth().createUserWithEmailAndPassword(email, password);
    } else { 
        userCredential = await auth().signInWithEmailAndPassword(email, password);
    }
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