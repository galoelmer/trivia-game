import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  PropsWithChildren,
} from "react";

import { getTriviaData, ITriviaData } from "../api";

interface IAnswersResult {
  correctAnswers: number;
  wrongAnswers: number;
}

interface ITriviaContext {
  questions: ITriviaData[];
  indexQuestion: number;
  setIndexQuestion: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  displayTrivia: boolean;
  setDisplayTrivia: React.Dispatch<React.SetStateAction<boolean>>;
  displayResults: boolean;
  setDisplayResults: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAnswer: string | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>;
  results: IAnswersResult;
  setResults: React.Dispatch<React.SetStateAction<IAnswersResult>>;
}

const defaultState = {
  questions: [],
  indexQuestion: 0,
  setIndexQuestion: () => {},
  loading: true,
  displayTrivia: false,
  setDisplayTrivia: () => {},
  displayResults: false,
  setDisplayResults: () => {},
  selectedAnswer: null,
  setSelectedAnswer: () => {},
  results: { correctAnswers: 0, wrongAnswers: 0 },
  setResults: () => {},
};

const TriviaContext = createContext<ITriviaContext>(defaultState);

export const useTriviaContext = () => useContext(TriviaContext);

export const TriviaProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [questions, setQuestions] = useState<Array<ITriviaData>>([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [results, setResults] = useState<IAnswersResult>({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const [displayTrivia, setDisplayTrivia] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);

  const { data, loading } = getTriviaData();

  useEffect(() => {
    if (!loading) {
      setQuestions(data);
    }
  }, [loading]);

  // Update results after each question is answered
  useEffect(() => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[indexQuestion].correctAnswer) {
        setResults((prev) => ({
          ...prev,
          correctAnswers: prev.correctAnswers + 1,
        }));
      } else {
        setResults((prev) => ({
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }));
      }
    }
  }, [selectedAnswer]);

  // Display trivia results after all questions are answered
  useEffect(() => {
    const totalAnswers = results.correctAnswers + results.wrongAnswers;

    if (questions.length && totalAnswers === questions.length) {
      setTimeout(() => {
        setDisplayTrivia(false);
        setIndexQuestion(0);
        setSelectedAnswer(null);
        setDisplayResults(true);
      }, 4500);
    }
  }, [results]);

  const values = useMemo(
    () => ({
      questions,
      indexQuestion,
      setIndexQuestion,
      loading,
      displayTrivia,
      setDisplayTrivia,
      displayResults,
      setDisplayResults,
      selectedAnswer,
      setSelectedAnswer,
      results,
      setResults,
    }),
    [
      questions,
      indexQuestion,
      setIndexQuestion,
      loading,
      displayTrivia,
      setDisplayTrivia,
      displayResults,
      setDisplayResults,
      selectedAnswer,
      setSelectedAnswer,
      results,
      setResults,
    ]
  );

  return (
    <TriviaContext.Provider value={values}>{children}</TriviaContext.Provider>
  );
};
