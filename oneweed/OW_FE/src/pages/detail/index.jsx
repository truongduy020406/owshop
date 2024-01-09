import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout.jsx';
import Header from '../../components/landing/Header.jsx';
import Footer from '../../components/landing/Footer.jsx';
import DetailProduct from '../../components/landing/DetailProduct.jsx';

const DetailProductPage = () => {
  return (
    <DefaultLayout>
      <Header/>
      <DetailProduct/>
      <Footer/>
    </DefaultLayout>
  );
};

export default DetailProductPage;