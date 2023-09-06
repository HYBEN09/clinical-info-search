import axios from 'axios';

export const ENDPOINT_URL = 'http://localhost:4000/sick';

export const searchSickness = async (query: any) => {
  try {
    const response = await axios.get(`${ENDPOINT_URL}?q=${query}`);
    const responseData = response.data;

    console.log('API 응답 데이터:', responseData);

    return responseData;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
};
