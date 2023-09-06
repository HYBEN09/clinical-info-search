import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// 검색 함수의 타입 정의
type SearchFunction = (query: string) => void;

// 훅에서 사용할 상태와 함수의 타입 정의
type UseDebouncedSearchReturnType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

// 디바운스 로직을 훅으로 분리
export const useDebouncedSearch = (
  searchFunction: SearchFunction,
  delay: number,
): UseDebouncedSearchReturnType => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout | null = null;

    const debouncedSearch = () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      debounceTimer = setTimeout(() => {
        searchFunction(searchTerm);
      }, delay);
    };

    debouncedSearch();

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [searchTerm, searchFunction, delay]);

  return { searchTerm, setSearchTerm };
};
