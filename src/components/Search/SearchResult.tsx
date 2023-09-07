import {
  NoSearchData,
  ResultContainer,
  ResultDataContainer,
  ResultDataList,
  SearchResultWrapper,
  StyledResultIcon,
} from '@/constants/styled';
import { SearchHistory } from './SearchHistory';
import { FC, useEffect, useRef, useState } from 'react';
import { ApiResponse } from '@/constants/ApiResponse';
import { SearchItem } from './SearchItem';
import { useKeyboardNavigation } from '@/hooks/useKeyControl';

interface SearchResultProps {
  recentSearches: string[];
  searchTerm: string;
  recommendedSearches: ApiResponse[];
}

export const SearchResult: FC<SearchResultProps> = ({
  recentSearches,
  searchTerm,
  recommendedSearches,
}) => {
  const isSearchTermNotEmpty = searchTerm.trim() !== '';
  const hasRecommendedSearches = recommendedSearches.length > 0;

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [selectedSickNm, setSelectedSickNm] = useState<string | null>(null);

  useKeyboardNavigation({
    itemCount: recommendedSearches.length,
    focusedIndex,
    setFocusedIndex,
    setSelectedItem: setSelectedSickNm,
    recommendedSearches,
  });

  return (
    <SearchResultWrapper>
      {!isSearchTermNotEmpty && <SearchHistory recentSearches={recentSearches} />}
      <ul>
        {searchTerm.trim() !== '' && (
          <ResultDataContainer>
            <StyledResultIcon />
            <ResultDataList>{searchTerm}</ResultDataList>
          </ResultDataContainer>
        )}
        {hasRecommendedSearches ? (
          recommendedSearches.map((recommendedTerm, index) =>
            selectedSickNm === null || selectedSickNm === recommendedTerm.sickNm ? (
              <SearchItem
                key={index}
                {...recommendedTerm}
                index={index}
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
              />
            ) : null,
          )
        ) : (
          <NoSearchData>검색 결과가 없습니다</NoSearchData>
        )}
      </ul>
    </SearchResultWrapper>
  );
};
