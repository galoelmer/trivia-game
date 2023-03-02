import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

import { localeType } from "../i18n";

export interface ITriviaData {
  question: string;
  answersList: string[];
  correctAnswer: string;
  image: { url: string };
}

export interface IGetTriviaData {
  loading: boolean;
  data: ITriviaData[];
}

export interface IGetTriviaProps {
  locale: localeType;
}

export const getTriviaData = ({
  locale = "en-US",
}: IGetTriviaProps): IGetTriviaData => {
  const { data, loading, refetch } = useQuery(QUERY_COLLECTION, {
    variables: { locale },
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  useEffect(() => {
    refetch();
  }, [locale]);

  const items = data?.triviaDataCollection?.items;

  return {
    data: items,
    loading,
  };
};

const QUERY_COLLECTION = gql`
  query getTriviaData($locale: String!) {
    triviaDataCollection(locale: $locale) {
      items {
        question
        answersList
        correctAnswer
        image {
          url
        }
      }
    }
  }
`;
