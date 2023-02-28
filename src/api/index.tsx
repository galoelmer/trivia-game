import { gql, useQuery } from "@apollo/client";

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
  const { data, loading } = useQuery(QUERY_COLLECTION, {
    variables: { locale },
  });
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

//   {
//     triviaDataCollection {
//       items {
//         question
//         answersList
//         correctAnswer
//         image {
//           url
//         }
//       }
//     }
//   }
// `;
