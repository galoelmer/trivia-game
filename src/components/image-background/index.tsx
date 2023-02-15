import {
  StyleSheet,
  View,
  Platform,
  ImageBackground,
  ImageBackgroundProps,
} from "react-native";

const isWeb = Platform.OS == "web";
const mobileBackgroundImage = require(`../../../assets/background-mobile.jpg`);
const desktopBackgroundImage = require(`../../../assets/background-desktop.jpg`);

export default function ({ children }: ImageBackgroundProps) {
  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        resizeMode="cover"
        source={isWeb ? desktopBackgroundImage : mobileBackgroundImage}
        style={styles.backgroundImage}
      >
        <View style={styles.childrenContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  childrenContainer: {
    flex: 1,
  },
});
