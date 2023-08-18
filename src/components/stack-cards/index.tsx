import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

// TODO: refactor component
const Card = ({
  index = 0,
  item,
  animations = {},
}: {
  index: number;
  animations: any;
  item: any;
}) => {
  const backgroundColor = animations[index].backgroundColor;
  const translateY = animations[index].translateY;
  const scaleX = animations[index].scaleX;
  const opacity = index === 3 || index === 0 ? animations[index].opacity : 1;

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          height: 600,
          zIndex: 3 - index,
          backgroundColor,
          opacity,
          transform: [{ scaleX }, { translateY }],
          shadowColor: "rgba(0, 0, 0, 0.35)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        },
        StyleSheet.absoluteFill,
      ]}
    >
      {item}
    </Animated.View>
  );
};

const StackCards = ({
  list = [],
  index = 0,
}: {
  list: React.JSX.Element[];
  index: number;
}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const firstUpdate = useRef(true);

  const [sliceIndex, setSliceIndex] = useState(0);

  const animate = () => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),

      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        animation.setValue(0);
        opacity.setValue(1);
        if (sliceIndex === list.length - 1) {
          setSliceIndex(0);
        } else {
          setSliceIndex(index);
        }
      }
    });
  };

  /* 
    TRANSLATE Y
  */
  const translate_1 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [10, 5, 0],
  });

  const translate_2 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [20, 15, 10],
  });

  const translate_3 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [30, 25, 20],
  });

  const translate_4 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [40, 35, 30],
  });

  /* 
    SCALE X 
  */
  const scale_x_1 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.9, 1],
  });

  const scale_x_2 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 0.9],
  });

  const scale_x_3 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 0.8],
  });

  const scale_x_4 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 0.7],
  });

  const animations = {
    0: {
      translateY: translate_1,
      scaleX: scale_x_1,
      opacity: opacity,
      backgroundColor: "rgb(255, 255, 255)",
    },
    1: {
      translateY: translate_2,
      scaleX: scale_x_2,
      opacity: scale_x_2,
      backgroundColor: "rgb(235, 235, 235)",
    },
    2: {
      translateY: translate_3,
      scaleX: scale_x_3,
      opacity: scale_x_3,
      backgroundColor: "rgb(215, 215, 215)",
    },
    3: {
      translateY: translate_4,
      scaleX: scale_x_4,
      opacity: animation,
      backgroundColor: "rgb(200, 200, 200)",
    },
  };

  const cards = list
    .slice(sliceIndex, sliceIndex + 4)
    .map((item, i) => (
      <Card key={i} index={i} item={item} animations={animations} />
    ));

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    animate();
  }, [index]);

  return <View>{cards}</View>;
};

export default StackCards;
