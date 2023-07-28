import {
  StyleSheet,
  View,
  ImageBackground,
  ImageBackgroundProps,
  Platform,
} from "react-native";

import { useTranslateContext } from "context/i18n";

const background = Platform.select({
  web: require("assets/images/background-desktop.jpg"),
  default: require("assets/images/background-mobile.jpg"),
});

export default function ({ children }: Partial<ImageBackgroundProps>) {
  const { isI18Initialized } = useTranslateContext();

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.backgroundImage}
      >
        <View style={styles.childrenContainer}>
          {isI18Initialized && children}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    display: "flex",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  childrenContainer: {
    flex: 1,
  },
});
