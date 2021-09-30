import { useQuery } from "react-query";
import { getLanguages } from "services/languages";

export const useLanguages = () => {
  const query = useQuery('languages', getLanguages);
  return query;
};