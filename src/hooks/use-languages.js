import { useQuery } from "react-query";
import { getLanguages } from "services/repositories.services";

export const useLanguages = () => {
  const query = useQuery('languages', getLanguages);
  return query;
};