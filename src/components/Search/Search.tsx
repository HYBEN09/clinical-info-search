import { styled } from 'styled-components';
import SearchButton from '../UI/SearchButton';
import SearchInput from '../UI/SearchInput';
import { useState } from 'react';

export const Search = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SearchWrapper>
      <SearchContainer $isFocus={isFocus}>
        <SearchInput setIsFocus={setIsFocus} />
        <SearchButton />
      </SearchContainer>
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
