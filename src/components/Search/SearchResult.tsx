import {
  NoSearchData,
  ResultContainer,
  ResultDataContainer,
  ResultDataList,
  SearchResultWrapper,
  StyledResultIcon,
} from '@/constants/styled';
import { SearchHistory } from './SearchHistory';
import { FC } from 'react';

interface SearchResultProps {
  recentSearches: string[];
  searchTerm: string;
  recommendedSearches: { sickCd: string; sickNm: string }[];
}

export const SearchResult: FC<SearchResultProps> = ({
  recentSearches,
  searchTerm,
  recommendedSearches,
}) => {
  const isSearchTermNotEmpty = searchTerm.trim() !== '';
  const hasRecommendedSearches = recommendedSearches.length > 0;

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
          recommendedSearches.map((recommendedTerm, index) => (
            <ResultContainer key={index}>
              <StyledResultIcon />
              <ResultDataList>{recommendedTerm.sickNm}</ResultDataList>
            </ResultContainer>
          ))
        ) : (
          <NoSearchData>검색 결과가 없습니다</NoSearchData>
        )}
      </ul>
    </SearchResultWrapper>
  );
};
