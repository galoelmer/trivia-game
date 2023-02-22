import { ITriviaData } from "../api";

export interface IAnswersResult {
    correctAnswers: number;
    wrongAnswers: number;
}

export interface ITriviaContext {
    loading: boolean;
    questions: ITriviaData[];
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
}

export interface ITriviaReducer {
    (state: ITriviaContext, action: ITriviaAction): ITriviaContext;
}

const TRIVIA_ACTIONS_TYPES = {
    SET_QUESTIONS: "SET_QUESTIONS",
    SET_INDEX_QUESTION: "SET_INDEX_QUESTION",
    SET_LOADING: "SET_LOADING",
    SET_DISPLAY_TRIVIA: "SET_DISPLAY_TRIVIA",
    SET_DISPLAY_RESULTS: "SET_DISPLAY_RESULTS",
    SET_SELECTED_ANSWER: "SET_SELECTED_ANSWER",
    SET_RESULTS: "SET_RESULTS",
} as const;

export type TriviaActionType = keyof typeof TRIVIA_ACTIONS_TYPES;

export interface ITriviaAction {
    type: TriviaActionType;
    payload?: any;
}
