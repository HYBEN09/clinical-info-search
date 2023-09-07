import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

export const axiosBase = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
