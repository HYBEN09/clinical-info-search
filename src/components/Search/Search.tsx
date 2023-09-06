import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import SearchInput from '../UI/SearchInput';
import SearchButton from '../UI/SearchButton';
import { SearchResult } from './SearchResult';
import { useRecentSearches } from '@/hooks/useRecentSearches';
import { searchSickness } from '@/api/api';
import { useSearchRecommendations } from '@/hooks/useSearchRecommendations';

export const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { recentSearches, addRecentSearch } = useRecentSearches();
  const recommendedSearches = useSearchRecommendations(searchTerm);

  // 함수를 호출하고 반환된 데이터를 사용
  const fetchData = async () => {
    try {
      const query = searchTerm;
      const responseData = await searchSickness(query);
      console.log('API 응답 데이터:', responseData);
    } catch (error) {
      console.error('데이터 가져오기 오류:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  // 검색 버튼 클릭 시 호출되는 함수
  const handleSearch = (searchTerm: string) => {
    addRecentSearch(searchTerm); // 검색어를 최근 검색어 목록에 추가
    setIsFocus(false); // 포커스 상태를 false로 변경하여 검색결과를 숨김
  };

  // 입력창의 값이 변경될 때 호출되는 함수
  const handleInputChange = (value: string) => {
    setSearchTerm(value); // 입력된 검색어를 상태 변수에 업데이트
  };

  return (
    <SearchWrapper>
      <SearchContainer $isFocus={isFocus}>
        <SearchInput
          setIsFocus={setIsFocus}
          onSearch={handleSearch}
          onInputChange={handleInputChange}
        />
        <SearchButton />
      </SearchContainer>
      {/* 포커스 상태일 때만 검색 결과 컴포넌트를 보여줌 */}
      {/* {isFocus && ( */}
      <AbsoluteWrapper>
        <SearchResult
          recentSearches={recentSearches}
          searchTerm={searchTerm}
          recommendedSearches={recommendedSearches}
        />
      </AbsoluteWrapper>
      {/* )} */}
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
