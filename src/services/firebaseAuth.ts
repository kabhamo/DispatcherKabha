import auth from '@react-native-firebase/auth';
import { AsyncLocalStorageKeysType, ErrorFirebaseAuthEnum } from '../util/enums';
import type { UserCredential } from '../util/types';
import { getLocalData, removeLocalValue, storeLocalData } from './asyncStorage';

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
    //console.log(userCredential.user.metadata.lastSignInTime)
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
    return payloadUserCredential;
}

export const authenticationUser = async () => { 

}

export const isOnBoarding = async () => { 
    try {
        const appData = await getLocalData(AsyncLocalStorageKeysType.OnBoardingKey);
        //If first time the appData will be null so the user will see the OnBoarding screen
        if (appData === null) {
            // So when the user login in the future
            //the app will not render the OnBoarding screen anymore
            await storeLocalData(AsyncLocalStorageKeysType.OnBoardingKey, false);
            return true;
        } else {
            //prevent rendeing the OnBoarding Screen
            return false;
        }
    } catch (ex) {
        console.log(ex)
        return false;
    }
}

export const logoutUser = async () => {
    // Clean the userCredentials from the local device storage
    await removeLocalValue(AsyncLocalStorageKeysType.UserAuthKey);
    await auth().signOut()
}