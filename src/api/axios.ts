import axios from 'axios';

export const axiosBase = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchSickness = async (query: any) => {
  try {
    const response = await axiosBase.get(`?q=${query}`);
    const responseData = response.data;

    console.log('API 응답 데이터:', responseData);

    return responseData;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
};
