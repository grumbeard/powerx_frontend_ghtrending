import { TRENDING_API_BASE } from "const";
import { fetchJson } from "lib/fetch-json";

export const getRepositories = (queries) => {
  let url = `${TRENDING_API_BASE}/github/repositories/`;
  for (const field in queries) {
    if (queries[field]) url += `?${field}=${queries[field]}`;
  }
  return fetchJson(url);
};