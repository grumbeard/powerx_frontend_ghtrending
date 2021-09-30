import { TRENDING_API_BASE } from "const";
import { fetchJson } from "lib/fetch-json";

export const getLanguages = () => {
  let url = `${TRENDING_API_BASE}/github/languages`;
  return fetchJson(url);
};