import { RefObject, useEffect, useRef } from "react";
import { Easing, TextInput, Animated, View, StyleSheet } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

import { useTriviaContext } from "context/trivia";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function CircleCountdown({
  percentage = 0,
  radius = 40,
  strokeWidth = 8,
  // duration = 1000,
  color = "#146b89",
  delay = 0,
  textColor = "#0a3746",
  max = 15, // time is seconds
}) {
  const { setIndexQuestion, indexQuestion } = useTriviaContext();

  const animated = useRef(new Animated.Value(max)).current;
  const textAnimations = useRef(new Animated.Value(0)).current;

  const circleRef: RefObject<Circle> = useRef(null);
  const inputRef: RefObject<TextInput> = useRef(null);

  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue: number) => {
    Animated.timing(animated, {
      delay,
      toValue,
      duration: max * 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const textAnimation = () => {
    const values: number[] = [];

    return (value: number) => {
      if (values.includes(value)) {
        return;
      }

      if (value === 0) {
        setTimeout(() => {
          setIndexQuestion(indexQuestion + 1);
        }, 1000);
      }

      values.push(value);

      return Animated.spring(textAnimations, {
        toValue: 1,
        stiffness: 100,
        damping: 800,
        useNativeDriver: true,
      }).start(() => {
        textAnimations.resetAnimation();
      });
    };
  };

  const scale = textAnimations.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 1.5, 2, 1.5, 1],
  });

  useEffect(() => {
    const animateNumbers = textAnimation();
    animation(percentage);

    const ani = animated.addListener((v) => {
      if (inputRef?.current) {
        const number = Math.round(v.value);
        if (number < 4) {
          animateNumbers(number);
        }

        inputRef.current.setNativeProps({
          text: number.toString(),
          color: number < 4 ? "tomato" : textColor,
        });
      }

      if (circleRef?.current) {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;

        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animated.removeListener(ani);
    };
  }, []);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color },
          styles.text,
          {
            transform: [{ scale }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: "800", textAlign: "center" },
});
