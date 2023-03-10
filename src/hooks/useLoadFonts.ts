import { useFonts } from "expo-font";

// TODO: fix fonts not working on Android
const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    Nunito: require("../../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../../assets/fonts/Nunito-Bold.ttf"),
    "Baloo-ExtraBold": require("../../assets/fonts/Baloo2-ExtraBold.ttf"),
  });

  return {
    fontsLoaded,
  };
};

export default useLoadFonts;
