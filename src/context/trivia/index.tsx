import React, {
  useEffect,
  createContext,
  useContext,
  useMemo,
  PropsWithChildren,
  useReducer,
} from "react";

import { reducer } from "./reducer";

import { ITriviaContext, IAnswersResult, IGetTriviaQuestions } from "./types";

import { NEXT_QUESTION_DELAY } from "components/trivia-card/constants";

const initialState = {
  questions: [],
  setQuestions: () => {},
  indexQuestion: 0,
  setIndexQuestion: () => {},
  displayTrivia: false,
  setDisplayTrivia: () => {},
  displayResults: false,
  setDisplayResults: () => {},
  selectedAnswer: null,
  setSelectedAnswer: () => {},
  setResults: () => {},
  results: { correctAnswers: 0, wrongAnswers: 0 },
  isCountdownOver: false,
  setIsCountdownOver: () => {},
  message: null,
  setMessage: () => {},
};

export const TriviaContext = createContext<ITriviaContext>(initialState);
export const useTriviaContext = () => useContext(TriviaContext);

export const TriviaProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isCountdownOver = useMemo(
    () => state.isCountdownOver,
    [state.isCountdownOver]
  );
  const setIsCountdownOver = (isCountdownOver: boolean) =>
    dispatch({
      type: "SET_IS_COUNTDOWN_OVER",
      payload: isCountdownOver,
    });

  const questions = useMemo(() => state.questions, [state.questions]);
  const results = useMemo(() => state.results, [state.results]);
  const message = useMemo(() => state.message, [state.message]);
  const indexQuestion = useMemo(
    () => state.indexQuestion,
    [state.indexQuestion]
  );
  const displayTrivia = useMemo(
    () => state.displayTrivia,
    [state.displayTrivia]
  );
  const displayResults = useMemo(
    () => state.displayResults,
    [state.displayResults]
  );
  const selectedAnswer = useMemo(
    () => state.selectedAnswer,
    [state.selectedAnswer]
  );

  const setQuestions = (questions: IGetTriviaQuestions) =>
    dispatch({ type: "SET_QUESTIONS", payload: questions });

  const setIndexQuestion = (index: number) =>
    dispatch({ type: "SET_INDEX_QUESTION", payload: index });

  const setDisplayTrivia = (displayTrivia: boolean) =>
    dispatch({
      type: "SET_DISPLAY_TRIVIA",
      payload: displayTrivia,
    });

  const setDisplayResults = (displayResults: boolean) =>
    dispatch({
      type: "SET_DISPLAY_RESULTS",
      payload: displayResults,
    });

  const setSelectedAnswer = (selectedAnswer: string | null) =>
    dispatch({
      type: "SET_SELECTED_ANSWER",
      payload: selectedAnswer,
    });

  const setResults = (results: IAnswersResult) =>
    dispatch({ type: "SET_RESULTS", payload: results });

  const setMessage = (message: string | null) =>
    dispatch({ type: "SET_MESSAGE", payload: message });

  // Update score results after each question is answered
  useEffect(() => {
    if (selectedAnswer === null) return;
    const correctAnswer = questions[indexQuestion]?.correctAnswer;
    const isCorrectAnswer = selectedAnswer === correctAnswer;

    setResults({
      ...results,
      ...(isCorrectAnswer
        ? { correctAnswers: results.correctAnswers + 1 }
        : { wrongAnswers: results.wrongAnswers + 1 }),
    });
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
      }, NEXT_QUESTION_DELAY);
    }
  }, [results]);

  const values = useMemo(
    () => ({
      questions,
      setQuestions,
      indexQuestion,
      setIndexQuestion,
      displayTrivia,
      setDisplayTrivia,
      displayResults,
      setDisplayResults,
      selectedAnswer,
      setSelectedAnswer,
      results,
      setResults,
      isCountdownOver,
      setIsCountdownOver,
      message,
      setMessage,
    }),
    [
      questions,
      setQuestions,
      indexQuestion,
      setIndexQuestion,
      displayTrivia,
      setDisplayTrivia,
      displayResults,
      setDisplayResults,
      selectedAnswer,
      setSelectedAnswer,
      results,
      setResults,
      isCountdownOver,
      setIsCountdownOver,
      message,
      setMessage,
    ]
  );

  return (
    <TriviaContext.Provider value={values}>{children}</TriviaContext.Provider>
  );
};
