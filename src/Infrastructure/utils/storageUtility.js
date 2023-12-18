import AsyncStorage from "@react-native-async-storage/async-storage";
let jwt_decode = require("jwt-decode");
export const setLogin = async (value) => {
  console.log("loggin in store func = ", value);
  try {
    await AsyncStorage.setItem("@isLoggedIn", JSON.stringify(value));
  } catch (e) {
    console.log("saving error: ", e);
    // saving error
  }
};

export const getLogin = async () => {
  try {
    const value = await AsyncStorage.getItem("@isLoggedIn");
    console.log("get async login = ", value);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log("retrive error: ", e);
  }
};
