import axios from 'axios';
import { API_URL } from '@/constants/url';

export const axiosBase = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
