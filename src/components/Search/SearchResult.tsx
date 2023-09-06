import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchResult = ({
  recentSearches,
  searchTerm,
  recommendedSearches,
}: {
  recentSearches: string[];
  searchTerm: string;
  recommendedSearches: { sickCd: string; sickNm: string }[];
}) => {
  const isSearchTermNotEmpty = searchTerm.trim() !== '';
  const hasRecommendedSearches = recommendedSearches.length > 0;

  return (
    <SearchResultWrapper>
      {!isSearchTermNotEmpty && (
        <>
          <p>최근 검색어</p>
          <ul>
            {recentSearches.map((recentSearch, index) => (
              <ResultContainer key={index}>
                <StyledResultIcon />
                <ResultDataList>{recentSearch}</ResultDataList>
              </ResultContainer>
            ))}
          </ul>
        </>
      )}
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

const SearchResultWrapper = styled.div`
  width: 490px;
  height: 420px;
  background-color: #fff;
  padding: 14px;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & > p {
    font-size: 14px;
    padding: 10px;
    color: #939191;
  }

  & > ul {
    padding: 10px;
    cursor: pointer;
  }
`;

const ResultDataContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  background-color: transparent;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #dfd7d7;
`;

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  background-color: transparent;
  border-radius: 6px;
  transition: background-color 0.3s ease;
`;

const ResultDataList = styled.div`
  margin-top: 2px;
  padding: 8px 2px;
  width: 100%;
  font-weight: 400;

  &:hover {
    background-color: #eef1f1;
  }
`;

const StyledResultIcon = styled(FaSearch)`
  margin-left: 7px;
  margin-right: 12px;
`;

const NoSearchData = styled.p`
  margin-left: 7px;
  margin-right: 12px;
  margin-top: 12px;
  color: #a7afb7;
`;
