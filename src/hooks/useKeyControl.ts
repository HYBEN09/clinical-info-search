import { ApiResponse } from '@/constants/ApiResponse';
import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  itemCount: number;
  focusedIndex: number | null;
  setFocusedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedItem: (item: string | null) => void;
  recommendedSearches: ApiResponse[];
}

export const useKeyboardNavigation = ({
  focusedIndex,
  setFocusedIndex,
  setSelectedItem: setSelectedSickNm,
  recommendedSearches,
}: UseKeyboardNavigationProps) => {
  const handleArrowDown = () => {
    if (focusedIndex === null) {
      setFocusedIndex(0);
    } else if (focusedIndex < recommendedSearches.length - 1) {
      setFocusedIndex(focusedIndex + 1);
    }
  };

  const handleArrowUp = () => {
    if (focusedIndex !== null && focusedIndex > 0) {
      setFocusedIndex(focusedIndex - 1);
    }
  };

  const handleEnter = () => {
    if (focusedIndex !== null) {
      const selectedSickNm = recommendedSearches[focusedIndex].sickNm;
      setSelectedSickNm(selectedSickNm); // 이 부분에서 검색어를 설정
      console.log('selected:', selectedSickNm);
    }
  };

  const handleEscape = () => {
    setFocusedIndex(null);
    setSelectedSickNm(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          handleArrowDown();
          break;
        case 'ArrowUp':
          e.preventDefault();
          handleArrowUp();
          break;
        case 'Enter':
          handleEnter();
          break;
        case 'Escape':
          handleEscape();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedIndex]);
};
