import CategoryPage from '../pages/category';
import HomePage from '../pages/home';
import SellerPage from '../pages/seller';
import SettingStore from '../pages/seller/SettingStore';
import ProductPage from '../pages/seller/product';
import AddProductPage from '../pages/seller/product/AddPage';
import Setting from '../pages/seller/product/Setting';
import SellerOrder from '../pages/seller/sellerOrder';
import OrderCancel from '../pages/seller/sellerOrder/Cancel';
import OrderSetting from '../pages/seller/sellerOrder/Setting';
import SellerTransport from '../pages/seller/sellerTransport';

export const publicRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/category/:id',
    element: <CategoryPage />,
  },
];

export const privateRoutes = [
  {
    path: '/seller',
    element: <SellerPage />,
  },
];

export const sellerRoutes = [
  {
    path: '/seller/transportManager',
    element: <SellerTransport />,
  },
  {
    path: '/seller/order/all',
    element: <SellerOrder />,
  },
  {
    path: '/seller/order/cancel',
    element: <OrderCancel />,
  },
  {
    path: '/seller/order/setting',
    element: <OrderSetting />,
  },
  {
    path: '/seller/product/all',
    element: <ProductPage />,
  },
  {
    path: '/seller/product/add',
    element: <AddProductPage />,
  },
  {
    path: '/seller/product/setting',
    element: <Setting />,
  },
  {
    path: '/seller/setting-store',
    element: <SettingStore />,
  },
];
