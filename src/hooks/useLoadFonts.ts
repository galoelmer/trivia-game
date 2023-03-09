import { useFonts } from "expo-font";

const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    "Baloo-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo-ExtraBold": require("../../assets/fonts/Baloo2-ExtraBold.ttf"),
  });

  return {
    fontsLoaded,
  };
};

export default useLoadFonts;
