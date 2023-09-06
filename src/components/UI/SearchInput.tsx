import styled from 'styled-components';
import { FocusEvent, useState } from 'react';

// 검색 입력창 컴포넌트의 프로퍼티 정의
interface SearchInputProps {
  setIsFocus: (value: boolean) => void;
  onSearch: (searchTerm: string) => void;
  onInputChange: (value: string) => void;
}

const SearchInput = ({ setIsFocus, onSearch, onInputChange }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 입력창에 포커스가 갔을 때 호출되는 함수
  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (event.isTrusted) {
      setIsFocus(true);
    }
  };

  // 입력창에서 포커스가 벗어났을 때 호출되는 함수
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.isTrusted) {
      setIsFocus(false);
    }
  };

  // 입력 값이 변경될 때 호출되는 함수
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onInputChange(value);
  };

  // Enter 키를 눌렀을 때 호출되는 함수
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <StyledInput
      type="text"
      placeholder="질환명을 입력 해주세요."
      aria-label="질환 검색창"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      value={searchTerm}
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
