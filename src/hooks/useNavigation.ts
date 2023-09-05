import { useNavigate } from 'react-router-dom';

interface NavigationProps {
  navigateHome: () => void;
}

export const useNavigation = (): NavigationProps => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return { navigateHome };
};
