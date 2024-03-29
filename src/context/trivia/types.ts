import { GetTriviaDataQuery } from "generated/graphql";

export interface IAnswersResult {
  correctAnswers: number;
  wrongAnswers: number;
}

export type IGetTriviaQuestions = NonNullable<
  GetTriviaDataQuery["triviaDataCollection"]
>["items"];

export interface ITriviaContext {
  questions: IGetTriviaQuestions;
  setQuestions: (questions: IGetTriviaQuestions) => void;
  results: IAnswersResult;
  indexQuestion: number;
  setIndexQuestion: (index: number) => void;
  displayTrivia: boolean;
  setDisplayTrivia: (displayTrivia: boolean) => void;
  displayResults: boolean;
  setDisplayResults: (displayResults: boolean) => void;
  selectedAnswer: string | null;
  setSelectedAnswer: (selectedAnswer: string | null) => void;
  setResults: (results: IAnswersResult) => void;
  isCountdownOver: boolean;
  setIsCountdownOver: (isCountdownOver: boolean) => void;
  message: string | null;
  setMessage: (message: string | null) => void;
}

export interface ITriviaReducer {
  (state: ITriviaContext, action: ITriviaActions): ITriviaContext;
}

export type ITriviaActions =
  | { type: "SET_QUESTIONS"; payload: IGetTriviaQuestions }
  | { type: "SET_INDEX_QUESTION"; payload: number }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_DISPLAY_TRIVIA"; payload: boolean }
  | { type: "SET_DISPLAY_RESULTS"; payload: boolean }
  | { type: "SET_SELECTED_ANSWER"; payload: string | null }
  | { type: "SET_RESULTS"; payload: IAnswersResult }
  | { type: "SET_IS_COUNTDOWN_OVER"; payload: boolean }
  | { type: "SET_MESSAGE"; payload: string | null };
