import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { UserButton } from '@clerk/clerk-react';
import { Popover } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SellerHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between py-3 bg-white shadow-md px-9">
      <h3
        className="text-2xl cursor-pointer"
        onClick={() => navigate('/seller')}
      >
        Kênh người bán hàng
      </h3>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <UserButton afterSignOutUrl="/" />
        </div>
        <div>
          <Popover
            placement="bottom"
            content={
              <div className="grid grid-cols-3 gap-6 p-3">
                <div
                  className="text-center cursor-pointer text-lg"
                  onClick={() => navigate('/seller/setting-store')}
                >
                  <SettingOutlined />
                  <p>Thiết lập shop</p>
                </div>
                <div className="text-center cursor-pointer text-lg">
                  <AppstoreOutlined />
                  <p>Sản phẩm</p>
                </div>
              </div>
            }
          >
            <h3 className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </h3>
          </Popover>
        </div>
        <div>
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
