import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedOut,
  useUser,
} from '@clerk/clerk-react';
import AuthClerkLayout from './layout/AuthClerkLayout';
import HomePage from './pages/home';
import { useDispatch } from 'react-redux';
import { registerAction } from './redux/api/auth';
import DetailProductPage from './pages/detail/index.jsx';
import SellerLayout from './layout/SellerLayout.jsx';
import { privateRoutes, publicRoutes, sellerRoutes } from './router/index.jsx';
import PrivateRouter from './router/PrivateRouter.jsx';

const AppContainer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PrivateRouter>{route.element}</PrivateRouter>}
        />
      ))}

      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {sellerRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<SellerLayout>{route.element}</SellerLayout>}
        />
      ))}

      <Route
        path="/login/*"
        element={
          <AuthClerkLayout>
            <SignIn routing="path" path="/login" />
          </AuthClerkLayout>
        }
      />

      <Route path="/product/:id" element={<DetailProductPage />} />

      <Route
        path="/signup/*"
        element={
          <AuthClerkLayout>
            <SignUp routing="path" path="/signup" />
          </AuthClerkLayout>
        }
      />

      <Route
        path="/login/seller/*"
        element={
          <AuthClerkLayout>
            <SignIn
              afterSignInUrl={'/seller'}
              routing="path"
              path="/login/seller"
            />
          </AuthClerkLayout>
        }
      />

      <Route
        path="/signup/seller/*"
        element={
          <AuthClerkLayout>
            <SignUp
              afterSignUpUrl={'/seller'}
              routing="path"
              path="/signup/seller"
            />
          </AuthClerkLayout>
        }
      />
    </Routes>
  );
};

export default AppContainer;
