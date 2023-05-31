import axios from 'axios';

const ApiUrl = import.meta.env.VITE_APP_API_URL as string;

const api = axios.create({
  baseURL: ApiUrl,
});


export default api;