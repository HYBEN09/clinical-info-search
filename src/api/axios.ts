import { ApiResponse } from '@/constants/ApiResponse';
import { getCache, setCache } from '@/utils/cache';
import { axiosBase } from './axiosBase';

export const searchSickness = async (query: string): Promise<ApiResponse | null> => {
  const cacheKey = `searchSickness_${query}`;

  let response: ApiResponse | null = getCache<ApiResponse>(cacheKey);

  if (!response) {
    try {
      const axiosResponse = await axiosBase.get(`?q=${query}`);
      response = axiosResponse.data;

      console.info('Calling API:', query);

      if (response) {
        setCache<ApiResponse>(cacheKey, response);
      }
    } catch (error) {
      console.error('API 호출 오류:', error);
      throw error;
    }
  } else {
    console.log('Using cached data for query:', query);
  }

  return response;
};
