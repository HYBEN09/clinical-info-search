import axios, { AxiosResponse } from 'axios';

interface SicknessData {
  sickCd: string;
  sickNm: string;
}

export const axiosBase = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchSickness = async (query: string): Promise<SicknessData> => {
  try {
    const response: AxiosResponse<SicknessData> = await axiosBase.get(`?q=${query}`);
    const responseData: SicknessData = response.data;

    console.log('API 응답 데이터:', responseData);

    return responseData;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
};
