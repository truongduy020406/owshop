import React, { useState } from 'react';
import SellerHeader from '../components/seller/header';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const items = [
  getItem('Vận chuyển', 'sub1', <MailOutlined />, [
    getItem('Quản lý vận chuyển', '/seller/transportManager'),
  ]),
  getItem('Quản lý đơn hàng', 'sub2', <AppstoreOutlined />, [
    getItem('Tất cả', '/seller/order/all'),
    getItem('Đơn hủy', '/seller/order/cancel'),
  ]),
  getItem('Quản lý sản phẩm', 'sub4', <SettingOutlined />, [
    getItem('Tất cả sản phẩm', '/seller/product/all')
  ]),
];

const SellerLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <SellerHeader />
      <div>
        <div className="fixed top-[56px] left-0 bottom-0 w-fit bg-white">
          <Menu
            mode="inline"
            style={{ width: 256 }}
            items={items}
            onClick={(menuInfo) => {
              navigate(menuInfo.key);
            }}
          />
        </div>
        <div className="ml-[256px] mt-[70px]">{children}</div>
      </div>
    </div>
  );
};

export default SellerLayout;
