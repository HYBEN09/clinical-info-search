import { FaSearch } from 'react-icons/fa';

const SearchButton = () => {
  return (
    <StyledButton>
      <StyledSearchIcon />
    </StyledButton>
  );
};

export default SearchButton;

import styled from 'styled-components';

const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: #007be9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const StyledSearchIcon = styled(FaSearch)`
  width: 21px;
  height: 21px;
`;
