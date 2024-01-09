import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = true;

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/login');
    }
  }, [isLoggedIn]);

  return <>{children}</>;
};

export default PrivateRouter;
