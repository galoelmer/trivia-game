import { View, ActivityIndicator, ActivityIndicatorProps } from "react-native";

interface Props {
  style?: ActivityIndicatorProps;
}

export default ({ style }: Props) => (
  <View
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      justifyContent: "center",
    }}
  >
    <ActivityIndicator size="large" color="#07151E" {...style} />
  </View>
);
