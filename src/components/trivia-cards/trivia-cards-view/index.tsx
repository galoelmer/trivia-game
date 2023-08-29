import React, { useEffect } from "react";
import { View } from "react-native";

import _shuffle from "lodash.shuffle";

import LoaderAnimation from "components/loader-animation";
import StackCards from "components/stack-cards";
import TriviaCard from "components/trivia-card";

import { useTriviaContext } from "context/trivia";
import { useTranslateContext } from "context/i18n";

import { getTriviaData } from "services/api";

const TriviaCards = () => {
  const { locale } = useTranslateContext();
  // TODO: Add error handling for API call
  const { loading, data } = getTriviaData({ locale });

  const { setQuestions, indexQuestion, questions } = useTriviaContext();

  useEffect(() => {
    if (!loading && data.length) {
      setQuestions(_shuffle(data));
    }
  }, [loading, data]);

  if (loading) {
    return <LoaderAnimation />;
  }

  const cards = questions.map((item) => (
    <TriviaCard key={item?.question} trivia={item} />
  ));

  return (
    <View>
      <StackCards list={cards} index={indexQuestion} />
    </View>
  );
};

export default TriviaCards;
