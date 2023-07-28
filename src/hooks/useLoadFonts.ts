import { loadAsync } from "expo-font";

const useLoadFonts = () =>
  loadAsync({
    Pepsi: require("assets/fonts/Pepsi.ttf"),
    Nunito: require("assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("assets/fonts/Nunito-Bold.ttf"),
    "Baloo-ExtraBold": require("assets/fonts/Baloo2-ExtraBold.ttf"),
  });

export default useLoadFonts;
