import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://a-bodrova.github.io/task-4',
});

export const getData = async (endpoint: string) => {
  return await api.get(endpoint);
};
