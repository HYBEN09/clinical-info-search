import axios from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINT_URL } from '@/api/api';

export const useSearchRecommendations = (searchTerm: string) => {
  const [recommendedSearches, setRecommendedSearches] = useState<
    { sickCd: string; sickNm: string }[]
  >([]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      // API 호출하여 추천 검색어 가져오기
      axios
        .get(`${ENDPOINT_URL}?q=${searchTerm}`)
        .then(response => {
          const recommendedTerms = response.data
            .map((item: any) => ({
              sickCd: item.sickCd,
              sickNm: item.sickNm,
            }))
            .slice(0, 7); //  7개 항목만 추출
          // 추천 검색어를 상태에 업데이트
          setRecommendedSearches(recommendedTerms);
        })
        .catch(error => {
          console.error('API 호출 오류:', error);
        });
    } else {
      // 검색어가 없을 때 빈 배열로 초기화
      setRecommendedSearches([]);
    }
  }, [searchTerm]);

  return recommendedSearches;
};
