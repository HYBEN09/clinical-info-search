import { useState, useEffect } from 'react';

// 최근 검색어와 관련된 상태와 기능을 관리하는 커스텀 훅

export const useRecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때, 로컬 스토리지에서 저장된 검색어를 불러옴
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      // 저장된 검색어를 최근 검색어 목록으로 설정
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  // 새로운 검색어를 최근 검색어 목록에 추가하는 함수
  const addRecentSearch = (searchTerm: string) => {
    const updatedSearches = [...recentSearches]; // 기존 검색어 목록을 복사
    updatedSearches.unshift(searchTerm); // 새로운 검색어를 목록 맨 앞에 추가ㅍ
    setRecentSearches(updatedSearches); // 최근 검색어 목록 갱신
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  return { recentSearches, addRecentSearch };
};
