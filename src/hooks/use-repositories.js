import { useState } from "react";
import { useQuery } from "react-query";
import { getRepositories } from "services/respositories";

export const useRepositories = () => {
  const [period, setPeriod] = useState('');
  const [language, setLanguage] = useState('');
  const [spokenLang, setSpokenLang] = useState('');
  
  const query = useQuery(['repositories', period, language, spokenLang], () => {
    return getRepositories({ period, language, spokenLang });
  });
  
  return {
    ...query,
    period,
    setPeriod,
    language,
    setLanguage,
    spokenLang,
    setSpokenLang
  };
};