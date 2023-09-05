import { styled } from 'styled-components';
import SearchButton from '../UI/SearchButton';
import SearchInput from '../UI/SearchInput';
import { useEffect, useState } from 'react';
import { SearchResult } from './SearchResult';

export const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const handleSearch = (searchTerm: string) => {
    const updatedSearches = [...recentSearches, searchTerm];
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

    setIsFocus(false);
  };

  return (
    <SearchWrapper>
      <SearchContainer $isFocus={isFocus}>
        <SearchInput setIsFocus={setIsFocus} onSearch={handleSearch} />
        <SearchButton />
      </SearchContainer>
      {isFocus && (
        <AbsoluteWrapper>
          <SearchResult recentSearches={recentSearches} />
        </AbsoluteWrapper>
      )}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.form`
  display: flex;
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
`;

const SearchContainer = styled.div<{ $isFocus: boolean }>`
  border-radius: 42px;
  border: 2px solid;
  background-color: #ffffff;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  width: 100%;
  position: relative;
  padding-right: 8px;
  height: 70px;

  border: ${props => (props.$isFocus ? '2px solid #0072c6' : '2px solid #ffffff')};
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 67%;
  width: 100%;
`;
