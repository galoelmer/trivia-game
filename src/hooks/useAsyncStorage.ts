import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
// TODO: add trivia data to async storage
const useAsyncStorage = (key: string, val?: any) => {
  const [value, setValue] = useState(val);

  useEffect(() => {
    if (value) {
      storeData(key, value);
    }
  }, [value]);

  useEffect(() => {
    getData(key).then((val) => {
      if (val) {
        setValue(val);
      }
    });
  }, []);

  return [value, setValue];
};

export default useAsyncStorage;
