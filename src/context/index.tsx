import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  PropsWithChildren,
} from "react";

import { getTriviaData, ITriviaData } from "../api";

interface ITriviaContext {
  questions: ITriviaData[];
  loading: boolean;
  displayTrivia: boolean;
  setDisplayTrivia: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  questions: [],
  loading: true,
  displayTrivia: false,
  setDisplayTrivia: () => {},
};

const TriviaContext = createContext<ITriviaContext>(defaultState);

export const useTriviaContext = () => useContext(TriviaContext);

export const TriviaProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [questions, setQuestions] = useState<Array<ITriviaData>>([]);
  const [displayTrivia, setDisplayTrivia] = useState(false);

  const { data, loading } = getTriviaData();

  useEffect(() => {
    if (!loading) {
      setQuestions(data);
    }
  }, [loading]);

  const values = useMemo(
    () => ({ questions, loading, displayTrivia, setDisplayTrivia }),
    [questions, loading, displayTrivia, setDisplayTrivia]
  );

  return (
    <TriviaContext.Provider value={values}>{children}</TriviaContext.Provider>
  );
};
