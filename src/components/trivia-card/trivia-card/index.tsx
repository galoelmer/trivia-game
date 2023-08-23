import { Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import CountdownTimer from "../countdown-timer";

import { useTriviaContext } from "context/trivia";

import styles from "./styles";

interface TriviaCardProps {
  question: any;
}

const TriviaCard = ({ question }: TriviaCardProps) => {
  const { indexQuestion, questions } = useTriviaContext();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.questionNumber}>
          <FontAwesome name="question-circle" size={18} color="#797979" />
          <Text style={styles.textQuestionNumber}>
            {indexQuestion + 1}/{questions.length}
          </Text>
        </View>
        <Pressable onPress={() => {}}>
          <FontAwesome name="close" size={20} color="#797979" />
        </Pressable>
      </View>
      <View style={styles.countdownContainer}>
        <CountdownTimer max={5} />
      </View>
    </View>
  );
};

export default TriviaCard;
