export const fetchJson = async (url, { method, headers, body }={}) => {
  const abortController = new AbortController();
  
  const result = await fetch(url, {
    signal: abortController.signal,
    method,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    body: body && JSON.stringify(body)
  }).catch(error => console.log(error));
  
  if (result.ok) return result.json();
  
  // Handle bad result
  console.log(result.statusText);
  
  result.cancel = () => abortController.abort();
};