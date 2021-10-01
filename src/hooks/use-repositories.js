import { useState } from "react";
import { useQuery } from "react-query";
import { getRepositories, getRepository } from "services/repositories.services";

export const useRepositories = () => {
  const [period, setPeriod] = useState('daily');
  const [language, setLanguage] = useState('');
  const [spokenLanguage, setSpokenLanguage] = useState('');
  
  const query = useQuery(['repositories', period, language, spokenLanguage], () => {
    return getRepositories({ period, language, spokenLanguage });
  }, { keepPreviousData: true });
  
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

export const useRepository = (name, author) => {
  
  const query = useQuery(['repository', name, author], () => getRepository({ name, author }));
  
  return {
    ...query,
  };
};