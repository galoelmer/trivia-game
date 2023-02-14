import { Image, StyleSheet, View, Platform } from "react-native";

const isWeb = Platform.OS == "web";
const mobileBackgroundImage = require(`../../../assets/background-mobile.jpg`);
const desktopBackgroundImage = require(`../../../assets/background-desktop.jpg`);

export default function ImageBackground() {
  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={isWeb ? desktopBackgroundImage : mobileBackgroundImage}
        style={styles.backgroundImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    ...(isWeb && { top: 0, bottom: 0, right: 0, left: 0 }),
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});
