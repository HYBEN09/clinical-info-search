import { FocusEvent, useRef } from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  setIsFocus: (value: boolean) => void;
}

const SearchInput = ({ setIsFocus }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (event.isTrusted) {
      setIsFocus(true);
    }
    event.isTrusted && setIsFocus(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.isTrusted) {
      setIsFocus(false);
    }
  };

  return (
    <StyledInput
      type="text"
      placeholder="질환명을 입력 해주세요."
      aria-label="질환 검색창"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default SearchInput;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0.5rem;
  margin-left: 10px;

  &::placeholder {
    font-size: 18px;
    color: #a7afb7;
    font-weight: 400;
  }

  &.focused {
    border-color: #0072c6;
  }
`;
