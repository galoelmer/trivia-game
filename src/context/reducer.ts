import { ITriviaReducer } from './types';

export const reducer: ITriviaReducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return {
                ...state,
                questions: action.payload,
            };
        case 'SET_INDEX_QUESTION':
            return {
                ...state,
                indexQuestion: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_DISPLAY_TRIVIA':
            return {
                ...state,
                displayTrivia: action.payload,
            };
        case 'SET_DISPLAY_RESULTS':
            return {
                ...state,
                displayResults: action.payload,
            };
        case 'SET_SELECTED_ANSWER':
            return {
                ...state,
                selectedAnswer: action.payload,
            };
        case 'SET_RESULTS':
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};