import { useUser } from '@clerk/clerk-react';
import Banner from '../../components/landing/Banner';
import Category from '../../components/landing/Category';
import Header from '../../components/landing/Header';
import Footer from '../../components/landing/Footer';
import DefaultLayout from '../../layout/DefaultLayout';
import Suggest from '../../components/landing/Suggest';
import { registerAction } from '../../redux/api/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { register } from '../../api';
import { fetchProduct } from '../../redux/api/product';

const HomePage = () => {
  const { isSignedIn, user } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (isSignedIn && user.id) {
        await register({
          id: user.id,
          username: user.username,
          imageUrl: user.imageUrl,
          emailAddress: user.primaryEmailAddress.emailAddress,
          role_id: 1,
        });
      }
    })();
  }, [isSignedIn, user]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <DefaultLayout>
      <Header />
      <Banner />
      <Category />
      <Suggest />
      <Footer />
    </DefaultLayout>
  );
};
export default HomePage;
