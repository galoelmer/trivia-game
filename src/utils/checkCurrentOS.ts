import { Platform } from "react-native";

const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";
const isWeb = Platform.OS === "web";
const isMobile = isIOS || isAndroid;

export { isIOS, isAndroid, isWeb, isMobile };
