import axios from 'axios';

export const API_URL = 'https://preonboardingapiserver.vercel.app/api/data';

export const axiosBase = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
