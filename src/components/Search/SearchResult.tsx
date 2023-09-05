import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchResult = ({ recentSearches }: { recentSearches: string[] }) => {
  return (
    <SearchResultWrapper>
      <p>최근 검색어</p>
      <ul>
        {recentSearches.map((searchTerm, index) => (
          <ResultContainer>
            <StyledResultIcon />
            <li key={index}>{searchTerm}</li>
          </ResultContainer>
        ))}
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
