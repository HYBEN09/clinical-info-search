import { styled } from 'styled-components';
import { useNavigation } from '@/hooks/useNavigation';

const NotFound = () => {
  const { navigateHome } = useNavigation();

  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <h2>
          4<span>0</span>4
        </h2>
      </NotFoundContainer>
      <h3>요청하신 페이지를 찾을 수 없습니다</h3>
      <button onClick={navigateHome}>Home</button>
    </NotFoundWrapper>
  );
};

export default NotFound;

const NotFoundWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & > h3 {
    font-size: 22px;
    font-weight: 600;
    color: #151515;
    margin-top: 0;
    margin-bottom: 25px;
  }

  & > button {
    position: absolute;
    left: 30%;
    padding: 14px 40px;
    border-radius: 8px;
    background-color: aliceblue;
    font-weight: 600;
    font-size: 18px;
  }
`;

const NotFoundContainer = styled.div`
  position: relative;
  height: 180px;

  & > h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 165px;
    font-weight: 700;
    margin: 0;
    color: #262626;
    text-transform: uppercase;
  }

  & > h2 > span {
    color: #00b7ff;
  }
`;
