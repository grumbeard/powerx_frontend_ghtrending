import { TRENDING_API_BASE, GITHUB_API_BASE } from "const";
import { fetchJson } from "lib/fetch-json";

export const getRepositories = (queries) => {
  let url = `${TRENDING_API_BASE}/github/repositories`;
  let queryString = ''
  
  for (const field in queries) {
    if (queries[field]) queryString += `&${field}=${queries[field]}`;
  }
  
  // If queries provided, remove leading '&' and append to url
  if (queryString) url += '?' + queryString.slice(1);
  
  return fetchJson(url);
};

export const getLanguages = () => {
  let url = `${TRENDING_API_BASE}/github/languages`;
  return fetchJson(url);
};

export const getSpokenLanguages = () => {
  let url = `${TRENDING_API_BASE}/github/spoken-languages`;
  return fetchJson(url);
};

export const getRepository = (queries) => {
  const { author, name } = queries;
  let url = `${GITHUB_API_BASE}/repos/${author}/${name}`;
  return fetchJson(url);
};