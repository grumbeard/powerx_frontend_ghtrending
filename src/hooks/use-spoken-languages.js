import { useQuery } from "react-query";
import { getSpokenLanguages } from "services/repositories.services";

export const useSpokenLanguages = () => {
  const query = useQuery('spoken-languages', getSpokenLanguages);
  return query;
};