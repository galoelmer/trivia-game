import { gql, useQuery } from "@apollo/client";

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

const getTriviaData = () => {
  const { data, loading } = useQuery(QUERY_COLLECTION);
  const items = data?.triviaDataCollection?.items;

  return {
    data: items,
    loading,
  };
};

export default getTriviaData;
