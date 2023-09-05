import { A11yHidden } from '@/constants/styled';
import { useNavigation } from '@/hooks/useNavigation';
import { styled } from 'styled-components';

export const Header = () => {
  const { navigateHome } = useNavigation();

  return (
    <HeaderWrapper>
      <button onClick={navigateHome}>
        <img src="/assets/logo.svg" alt="한국 임상정보 로고" height={36} />
        <A11yHidden>한국 임상정보</A11yHidden>
      </button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
