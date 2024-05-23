import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataInStorage = async (key: StorageKeys, value: any) => {
  try {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, value);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getDataFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? parseString(value) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// export const storeDataInStorage = (key: StorageKeys, value: any) => {
//   try {
//     if (typeof value === "object") {
//       value = JSON.stringify(value);
//     }
//     storage.set(key, value);
//   } catch (e) {}
// };

// export const getStorageData = (key: StorageKeys) => {
//   try {
//     const value = storage.getString(key);
//     if (value) {
//       return parseString(value);
//     }

//     return null;
//   } catch (e) {}
// };

const parseString = (str: string) => {
  try {
    const json = JSON.parse(str);
    console.log("Parsed JSON:", json);
    return json;
  } catch (e) {
    return str;
  }
};

export enum StorageKeys {
  TOKEN = "auth_token",
  STATE = "state",
  IS_AUTHENTICATED = "is_authenticated",
}
