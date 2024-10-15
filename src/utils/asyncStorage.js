import AsyncStorage from '@react-native-async-storage/async-storage';

//kaydederken
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('SETITEM: ', error);
  }
};
//alırken
export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log('GETITEM: ', error);
  }
};
//silerken
export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('REMOVEITEM: ', error);
  }
};