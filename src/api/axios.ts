import axios from 'axios';

const apiCache: Record<string, any> = {};

export const searchSickness = async (query: string) => {
  const cacheKey = `searchSickness_${query}`;

  // 캐시된 결과가 있으면 바로 반환
  if (apiCache[cacheKey]) {
    return apiCache[cacheKey];
  }

  try {
    const response = await axios.get(`?q=${query}`);
    const responseData = response.data;

    console.info('calling api');

    return responseData;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
};
