import { FC } from 'react';
import { ApiResponse } from '@/constants/ApiResponse';
import { ResultContainer, ResultDataList, StyledResultIcon } from '@/constants/styled';

interface SearchResultItemProps extends ApiResponse {
  index: number;
  focusedIndex: number | null;
  setFocusedIndex(index: number | null): void;
}

export const SearchItem: FC<SearchResultItemProps> = ({
  sickNm,
  index,
  focusedIndex,
  setFocusedIndex,
}) => {
  return (
    <ResultContainer
      className={index === focusedIndex ? 'focused' : ''}
      onMouseEnter={() => setFocusedIndex(index)}
      onMouseLeave={() => setFocusedIndex(null)}
    >
      <StyledResultIcon />
      <ResultDataList>{sickNm}</ResultDataList>
    </ResultContainer>
  );
};
