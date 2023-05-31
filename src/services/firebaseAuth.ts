import auth from '@react-native-firebase/auth';
import { AsyncLocalStorageKeysType, ErrorFirebaseAuthEnum } from '../util/enums';
import type { UserCredential } from '../util/types';
import { getLocalData, storeLocalData } from './asyncStorage';

export const signUpAndSetUserCredential = async (email: string, password: string, rePassword?: string) => { 
    if (rePassword && password !== rePassword) {
        throw new Error(ErrorFirebaseAuthEnum.UnmatchedPassword);
    }
    let payloadUserCredential: UserCredential = {
        email: "",
        token: "",
        isLoggedIn: false,
        uid: "",
        lastLogin: ""
    };
    let userCredential;
    if (rePassword) {
        userCredential = (await auth().createUserWithEmailAndPassword(email, password));
    } else { 
        userCredential = await auth().signInWithEmailAndPassword(email, password);
    }
    const idToken = await userCredential.user.getIdToken();
    console.log(userCredential.user.metadata.lastSignInTime)
    if (userCredential && userCredential.user.email && idToken && userCredential.user.metadata.lastSignInTime) { 
        payloadUserCredential = {
            email: userCredential.user.email,
            token: idToken,
            isLoggedIn: true,
            uid: userCredential.user.uid,
            lastLogin: new Date(userCredential.user.metadata.lastSignInTime).toUTCString(),
        }
    }
    
    await storeLocalData(AsyncLocalStorageKeysType.UserAuthKey, payloadUserCredential);
    const isOnBoarding = await getLocalData(AsyncLocalStorageKeysType.OnBoardingKey)
    if (isOnBoarding === null) {
        await storeLocalData(AsyncLocalStorageKeysType.OnBoardingKey, true);
    } else { 
        await storeLocalData(AsyncLocalStorageKeysType.OnBoardingKey, false);
    }
    return payloadUserCredential;
}

export const logoutUser = async () => { 
    await auth().signOut()
}