export const request = (endpoint: string, config?: RequestInit) => {
  const url = `http://localhost:3001/api${endpoint}`;
  return fetch(url, config).then((response) => response.json());
};
