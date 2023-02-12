import { View, ActivityIndicator } from "react-native";

export default () => (
  <View
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      justifyContent: "center",
    }}
  >
    <ActivityIndicator size="large" color="#07151E" />
  </View>
);
