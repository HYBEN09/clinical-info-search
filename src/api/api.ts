import axios from 'axios';

export const searchSickness = async (query: any) => {
  try {
    const response = await axios.get(`http://localhost:4000/sick?q=${query}`);
    const responseData = response.data; // API 응답 데이터

    // console.log('API 응답 데이터:', responseData);

    return responseData; // 데이터 반환
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
};
