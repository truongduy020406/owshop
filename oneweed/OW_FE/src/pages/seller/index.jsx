import { UserButton, useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { register } from '../../api';
// import BarChart from '../../components/landing/BarChart';
import DropDown from '../../components/landing/DropDown';
import { Link } from 'react-router-dom';
import SellerLayout from '../../layout/SellerLayout';

const SellerPage = () => {
  const { isSignedIn, user } = useUser();
  console.log(user);

  useEffect(() => {
    (async () => {
      if (isSignedIn && user.id) {
        await register({
          id: user.id,
          username: user.username,
          imageUrl: user.imageUrl,
          emailAddress: user.primaryEmailAddress.emailAddress,
          role_id: 2,
        });
      }
    })();
  }, [isSignedIn, user]);
  return (
    <SellerLayout>
      <h1>Seller page</h1>
    </SellerLayout>
  );
};

export default SellerPage;
