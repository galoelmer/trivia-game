import { gql, useQuery } from "@apollo/client";

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

export function getTriviaData(): IGetTriviaData {
  const { data, loading } = useQuery(QUERY_COLLECTION);
  const items = data?.triviaDataCollection?.items;

  return {
    data: items,
    loading,
  };
}

const QUERY_COLLECTION = gql`
  {
    triviaDataCollection {
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
