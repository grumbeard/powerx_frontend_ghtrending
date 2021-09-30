import { useState } from "react";
import { useQuery } from "react-query";
import { getRepositories } from "services/repositories.services";

export const useRepositories = () => {
  const [period, setPeriod] = useState('daily');
  const [language, setLanguage] = useState('');
  const [spokenLanguage, setSpokenLanguage] = useState('');
  
  const query = useQuery(['repositories', period, language, spokenLanguage], () => {
    return getRepositories({ period, language, spokenLanguage });
  });
  
  return {
    ...query,
    period,
    setPeriod,
    language,
    setLanguage,
    spokenLanguage,
    setSpokenLanguage
  };
};