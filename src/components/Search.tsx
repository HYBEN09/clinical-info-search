import { styled } from 'styled-components';
import Button from './UI/Button';
import Input from './UI/Input';

export const Search = () => {
  return (
    <SearchWrapper>
      <SearchContainer>
        <Input />
        <Button />
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

const SearchContainer = styled.div`
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
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
`;
