import {
  NoSearchData,
  ResultDataContainer,
  ResultDataList,
  SearchResultWrapper,
  StyledResultIcon,
} from '@/constants/styled';
import { FC, useState } from 'react';
import { SearchItem } from './SearchItem';
import { SearchHistory } from './SearchHistory';
import { ApiResponse } from '@/constants/ApiResponse';
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
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useKeyboardNavigation({
    itemCount: recommendedSearches.length,
    focusedIndex,
    setFocusedIndex,
    setSelectedItem,
    recommendedSearches,
  });

  // 선택된 아이템에 따라 추천 검색어 필터링
  const filteredRecommendedSearches = selectedItem
    ? recommendedSearches.filter(search => search.sickNm === selectedItem)
    : recommendedSearches;

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
          filteredRecommendedSearches.map((recommendedTerm, index) =>
            selectedItem === null || selectedItem === recommendedTerm.sickNm ? (
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
