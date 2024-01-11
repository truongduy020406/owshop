import { useUser } from '@clerk/clerk-react';
import Banner from '../../components/landing/Banner';
import Category from '../../components/landing/Category';
import Header from '../../components/landing/Header';
import Footer from '../../components/landing/Footer';
import DefaultLayout from '../../layout/DefaultLayout';
import Suggest from '../../components/landing/Suggest';
import { registerAction } from '../../redux/api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { register } from '../../api';
import { fetchProduct } from '../../redux/api/product';
import { Table } from 'antd';
import { createOrder } from '../../service/order';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const { isSignedIn, user } = useUser();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.card);
    const columns = [
        {
          title: 'Product Name',
          dataIndex: 'name_pro',
          key: 'name_pro',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Quantity',
          dataIndex: 'quality',
          key: 'quality',
        },
      ];
      
      
  const navi= useNavigate()

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
  const handleMuaNgay = async () => {
    try {
      const data = {
        user_id: user?.id,
        total: products.reduce((acc, product) => acc + product.price * product.quality, 0),
        order_date: new Date(),  // You may want to adjust how you get the order date
      };
  
      const response = await createOrder(data);
      alert("Mua hàng thành công");
      navi("/")
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <DefaultLayout>
      <Header />
      <Table
      columns={columns}
      dataSource={products}
      rowKey={(record) => record.product_id} // Assuming product_id is unique for each product
      // Add other props and event handlers as needed
    />
<button
                className="w-[200px] h-[50px] rounded-[2px]
                    text-white text-[17px] bg-[#d0011b]"
                type="button"
                onClick={handleMuaNgay}
              >
                Mua Ngay
              </button>

      <Footer />
    </DefaultLayout>
  );
};
export default Payment;
