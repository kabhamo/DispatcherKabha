import AsyncStorage from '@react-native-async-storage/async-storage';

type asyncStorageProp = {
    email: string,
    token: string,
    isLoggedIn: boolean
}
export const storeData = async (value: asyncStorageProp) => {
    try {
        const stringifyValue =JSON.stringify(value)
      await AsyncStorage.setItem('@userAuthKey', stringifyValue)
    } catch (ex) {
      // saving error
        console.log("asyncStorage-store Error: ",ex)
    }
}


export const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(ex) {
      // error reading value
      console.log("asyncStorage-read Error: ",ex)
    }
}

export const removeValue = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(ex) {
      // remove error
      console.log("asyncStorage-remove Error: ",ex)
    }
  
    console.log('Done.')
  }
  