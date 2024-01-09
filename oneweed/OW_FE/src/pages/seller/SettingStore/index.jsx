import { AppstoreOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React, { useEffect } from 'react';
import ProductCard from '../../../components/productCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../redux/api/product';

const SettingStore = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="w-full flex justify-center mt-[80px] ">
      <div className="bg-white shadow-md h-fit p-10 max-w-[900px]">
        <div className="flex pb-4 border-b-2 border-gray-200">
          <div className="flex gap-4">
            <img
              src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/177565248_2906957672917278_1600894721905628046_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=1wvwglTSjKEAX9nkY54&_nc_ht=scontent.fhan14-4.fna&oh=00_AfA91WXa8PS-qTZil2D_NST4Z_ADXmPbOF-TEIi-wubYGg&oe=659D0091"
              alt=""
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h1 className="text-xl">OneWeed Shoppp</h1>
              <p className="mt-2">Online 2gio truoc</p>
            </div>
          </div>
          <div className="pl-6 grid grid-cols-2 gap-2">
            <div className="flex gap-2">
              <AppstoreOutlined />
              <p>
                Sản phẩm: <span>202</span>
              </p>
            </div>
            <div className="flex gap-2">
              <AppstoreOutlined />
              <p>
                Sản phẩm: <span>Người theo Dõi</span>
              </p>
            </div>
            <div className="flex gap-2">
              <AppstoreOutlined />
              <p>
                Đang theo: <span>202</span>
              </p>
            </div>
            <div className="flex gap-2">
              <AppstoreOutlined />
              <p>
                Đánh giá: <span>202</span>
              </p>
            </div>
            <div className="flex gap-2">
              <AppstoreOutlined />
              <p>
                Tỉ lệ phản hồi chat: <span>202</span>
              </p>
            </div>
            <div className="flex gap-2">
              <AppstoreOutlined />
              <p>
                Tham gia: <span>202</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingStore;
