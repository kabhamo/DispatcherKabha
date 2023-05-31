import AsyncStorage from '@react-native-async-storage/async-storage';


const USER_AUTH_KEY: string = '@userAuthKey';
export const storeLocalData = async (key: string, value: any) => {
    try {
        const stringifyValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, stringifyValue)
    } catch (ex) {
      // saving error
        console.log("asyncStorage-store Error: ",ex)
    }
}


export const getLocalData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(ex) {
      // error reading value
      console.log("asyncStorage-read Error: ",ex)
    }
}

export const removeLocalValue = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(ex) {
      // remove error
      console.log("asyncStorage-remove Error: ",ex)
    }
  
    console.log('Done.')
  }
  