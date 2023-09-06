import { FC, MouseEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';

interface SearchButtonProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

const SearchButton: FC<SearchButtonProps> = ({ onSearch, searchTerm }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <StyledButton onClick={handleClick} tabIndex={0}>
      <StyledSearchIcon />
    </StyledButton>
  );
};

export default SearchButton;

//style
const StyledButton = styled.button`
  width: 55px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #007be9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  &:focus {
    outline: none;
    border: 2px solid #0259a4;
    box-shadow: 0 0 2px #0072c6;
  }
`;

const StyledSearchIcon = styled(FaSearch)`
  width: 21px;
  height: 21px;
`;
