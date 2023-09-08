import { styled } from 'styled-components';
import { A11yHidden } from '@/constants/styled';
import { useNavigation } from '@/hooks/useNavigation';

export const Header = () => {
  const { navigateHome } = useNavigation();

  return (
    <HeaderWrapper>
      <button onClick={navigateHome}>
        <img src="/assets/logo.svg" alt="한국 임상정보 로고" height={36} />
        <A11yHidden>한국 임상정보</A11yHidden>
      </button>
      <ul>
        <li>소개</li>
        <li>질문과 답변</li>
        <li>소식받기</li>
        <li>제휴/문의</li>
      </ul>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  & > ul {
    display: flex;
    padding-right: 20px;

    & > li {
      margin-left: 30px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
