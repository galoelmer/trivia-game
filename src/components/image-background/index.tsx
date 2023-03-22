import {
  StyleSheet,
  View,
  ImageBackground,
  ImageBackgroundProps,
} from "react-native";

import LoadingAnimation from "components/loader-animation";

import { getBackgroundImageUrl } from "services/api";
import { backgroundId } from "./constants";

export default function ({ children }: Partial<ImageBackgroundProps>) {
  const { loading, url } = getBackgroundImageUrl(backgroundId);

  if (loading) {
    return <LoadingAnimation style={{ color: "#fff" }} />;
  }

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: url }}
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
