import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchResult = ({
  recentSearches,
  searchTerm,
}: {
  recentSearches: string[];
  searchTerm: string;
}) => {
  return (
    <SearchResultWrapper>
      <p>최근 검색어</p>
      <ul>
        {searchTerm.trim() !== '' ? ( // 입력 중인 검색어가 비어 있지 않은 경우
          <ResultContainer>
            <StyledResultIcon />
            <li>{searchTerm}</li> {/* 입력 중인 검색어를 표시 */}
          </ResultContainer>
        ) : (
          recentSearches.map(
            (
              searchTerm,
              index, // 입력 중인 검색어가 없는 경우, 최근 검색어 목록 표시
            ) => (
              <ResultContainer key={index}>
                <StyledResultIcon />
                <li>{searchTerm}</li> {/* 최근 검색어 목록을 표시 */}
              </ResultContainer>
            ),
          )
        )}
      </ul>
    </SearchResultWrapper>
  );
};

const SearchResultWrapper = styled.div`
  width: 490px;
  height: 300px;
  background-color: #fff;
  padding: 28px;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & > p {
    font-size: 14px;
    color: #939191;
  }

  & > ul {
    padding: 20px 10px;
    cursor: pointer;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  background-color: transparent;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  & > li {
    margin-top: 2px;
    padding: 8px 2px;
    width: 100%;
    font-weight: 400;
  }

  &:hover {
    background-color: #eef1f1;
  }
`;

const StyledResultIcon = styled(FaSearch)`
  margin-left: 7px;
  margin-right: 12px;
`;
