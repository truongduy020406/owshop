import React from 'react';
import BarChart from '../../components/landing/BarChart';
import DropDown from '../../components/landing/DropDown';
import { Link } from 'react-router-dom';

const SalePage = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-3 bg-white shadow-md px-9">
        <h3 className="text-2xl">Kênh người bán hàng</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/326659284_719075869891136_5112455201146598033_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=oeWXsgm1IzoAX8howPh&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAOwXqyGdJjPStNKYvIBXsFF4Cr1Q7rSeBeZf2LrH6ksA&oe=6576A5DF"
              alt="avatar"
            />
            <h3>Huỳnh ngọc đạt</h3>
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
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </h3>
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
      <div className="flex justify-between gap-5 pt-11 px-9">
        <div className="flex-1 bg-white rounded-md shadow-md task-bar">
          <DropDown title="Vận chuyển">
            <div className="ml-6">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link to="/">Quản lý vận chuyển</Link>
                </li>
                <li>
                  <Link to="/">Giao hàng loạt</Link>
                </li>
                <li>
                  <Link to="/">Quản lý vận chuyển</Link>
                </li>
              </ul>
            </div>
          </DropDown>
          <DropDown title="Quản lý đơn hàng">
            <div className="ml-6">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link to="/">Tất cả</Link>
                </li>
                <li>
                  <Link to="/">Đơn huỷ</Link>
                </li>
                <li>
                  <Link to="/">Trả hàng/hoàn tiền</Link>
                </li>
              </ul>
            </div>
          </DropDown>
          <DropDown title="Quản lý sản phẩm">
            <div className="ml-6">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link to="/">Tất cả sản phẩm</Link>
                </li>
                <li>
                  <Link to="/">Thêm sản phẩm</Link>
                </li>
                <li>
                  <Link to="/">Sản phẩm vi phạm</Link>
                </li>
                <li>
                  <Link to="/">Cài đặt sản phẩm</Link>
                </li>
              </ul>
            </div>
          </DropDown>
        </div>
        <div className="w-[60%]">
          <BarChart />
        </div>
        <div className="flex-1 p-10 bg-white rounded-md shadow-md tb">
          <div className="flex items-center justify-between ">
            <h3 className="text-xl font-bold">Thông báo</h3>
            <span className="text-cyan-600">xem thêm</span>
          </div>
          <div>
            <h3 className="pt-4 text-base font-bold ">
              cập nhật tin tức từ cộng đồng người bán
            </h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;
