import { FC } from 'react';
import { ResultContainer, ResultDataList, StyledResultIcon } from '@/constants/styled';

interface RecentSearchesProps {
  recentSearches: string[];
}

export const SearchHistory: FC<RecentSearchesProps> = ({ recentSearches }) => {
  return (
    <div>
      <p>최근 검색어</p>
      <ul>
        {recentSearches.map((recentSearch, index) => (
          <ResultContainer key={index}>
            <StyledResultIcon />
            <ResultDataList>{recentSearch}</ResultDataList>
          </ResultContainer>
        ))}
      </ul>
    </div>
  );
};
