import { TRENDING_API_BASE, GITHUB_API_BASE } from "const";
import { fetchJson } from "lib/fetch-json";

const GITHUB_TOKEN = process.env.REACT_APP_CLIENT_TOKEN;

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
  const url = `${TRENDING_API_BASE}/github/languages`;
  return fetchJson(url);
};

export const getSpokenLanguages = () => {
  const url = `${TRENDING_API_BASE}/github/spoken-languages`;
  return fetchJson(url);
};

export const getRepository = (queries) => {
  const { author, name } = queries;
  const url = `${GITHUB_API_BASE}/repos/${author}/${name}`;
  return fetchJson(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });
};

export const getSecondaryRepositoryData = async (repository) => {
  const secondaryDataUrl = {
    owner: repository.owner.url,
    organization: repository.organization && repository.organization.url,
    contributors: repository.contributors_url,
    subscribers: repository.subscribers_url,
    languages: repository.languages_url
  }
  
  const secondaryData = {};
  await Promise.all(
    Object.keys(secondaryDataUrl).map(async name =>
      (secondaryDataUrl[name])
        ? secondaryData[name] = await fetchJson(secondaryDataUrl[name], {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`
            }
          })
        : null
    )
  );
      
  return {
    repository,
    ...secondaryData
  }
}