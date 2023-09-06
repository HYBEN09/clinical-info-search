import { useState, useEffect } from 'react';

// 최근 검색어와 관련된 상태와 기능을 관리하는 커스텀 훅

export const useRecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  // 새로운 검색어를 최근 검색어 목록에 추가하는 함수
  const addRecentSearch = (searchTerm: string) => {
    const updatedSearches = [...recentSearches];
    updatedSearches.unshift(searchTerm);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  return { recentSearches, addRecentSearch };
};
