import { useEffect } from "react";
import { useGetTriviaDataQuery } from "generated/graphql";

import { localeType } from "context/i18n";

export interface IGetTriviaProps {
  locale: localeType;
}

export const getTriviaData = ({ locale = "en-US" }: IGetTriviaProps) => {
  const { data, loading, refetch } = useGetTriviaDataQuery({
    variables: { locale },
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  useEffect(() => {
    refetch();
  }, [locale]);

  const items = data?.triviaDataCollection?.items || [];

  return {
    data: items,
    loading,
  };
};
