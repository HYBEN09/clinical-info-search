import { ApiResponse } from '@/@type/ApiResponse';
import axios from 'axios';

interface CachedData {
  data: ApiResponse;
  expireTime: number;
}
const apiCache: Record<string, CachedData> = {};

const isCacheExpired = (expireTime: number) => {
  const currentTime = Date.now();
  return currentTime > expireTime;
};

export const searchSickness = async (query: string) => {
  const cacheKey = `searchSickness_${query}`;

  // 캐시된 결과가 있으면 바로 반환
  if (apiCache[cacheKey] && !isCacheExpired(apiCache[cacheKey].expireTime)) {
    console.log('Using cached data for query:', query);
    return apiCache[cacheKey].data;
  }

  try {
    const response = await axios.get(`?q=${query}`);
    const responseData = response.data;

    console.info('Calling API:', query);

    // 데이터를 캐시하고 expire time 설정 (5분 후 만료)
    apiCache[cacheKey] = {
      data: responseData,
      expireTime: Date.now() + 5 * 60 * 1000,
    };

    return responseData;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
};
