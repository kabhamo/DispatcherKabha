import auth from '@react-native-firebase/auth';

//export const firebaseSignin = async (email : string, password : string) => {
//    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//    if(userCredential.user) return userCredential.user
//}

//export const firebaseLogin = async (email: string, password: string) => {
//    const userCredential = await auth().signInWithEmailAndPassword(email, password)
//    if (userCredential.user) return userCredential.user
// }

export const firebaseLogout = async () => { 
    await auth().signOut()
    //? Triggers the onAuthStateChanged listener.
    //? So make sure to update the redux/asyncStorage
}