import { useState } from "react";
import { useQuery } from "react-query";
import { getRepositories, getRepository, getSecondaryRepositoryData } from "services/repositories.services";

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

export const useRepository = (name, author) => {
  
  const query = useQuery(['repository', name, author], async () => {
    const repo = await getRepository({ name, author });
    return await getSecondaryRepositoryData(repo);
  });
  
  return { ...query };
};