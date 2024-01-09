import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Button, Menu, Popover } from 'antd';
import Cart from '../../assets/icons/Cart';
import InputField from '../fields/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from 'yup';
import i18next from 'i18next';
import vnFlag from '../../../public/images/flag/vietnam.png';
import enFlag from '../../../public/images/flag/usa.png';
import jpFlag from '../../../public/images/flag/japan.png';
import krFlag from '../../../public/images/flag/south-korea.png';
import userIamge from '../../../public/images/user.png';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { UserButton, useUser } from '@clerk/clerk-react';

const language = [
  {
    lang: 'en',
    label: 'English',
    flag: enFlag,
  },
  {
    lang: 'vi',
    label: 'Tiếng Việt',
    flag: vnFlag,
  },
  {
    lang: 'jp',
    label: '日本語',
    flag: jpFlag,
  },
  {
    lang: 'kr',
    label: '한국인',
    flag: krFlag,
  },
];

const menuItemsAcount = [
  {
    label: <Link to={'/accout'}>Tài khoản của tôi</Link>,
    key: 'account',
  },
  {
    label: <Link to={'/accout'}>Đơn mua</Link>,
    key: 'bill',
  },
  {
    label: 'Đăng xuất',
    key: 'logout',
  },
];

const Header = () => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(Schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user, isLogged } = useSelector((state) => state.auth);
  const user = useUser();

  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  const content = (
    <div className="w-[300px] flex items-center justify-center h-[300px]">
      <p>Thông báo trống</p>{' '}
    </div>
  );
  const popupEng = (
    <div className="flex flex-col gap-4 p-2">
      {language.map((item) => (
        <div
          className="flex gap-4 cursor-pointer"
          key={item.lang}
          onClick={() => handleChangeLanguage(item.lang)}
        >
          <img src={item.flag} alt="" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
  const popupCart = (
    <div className="w-[300px] flex items-center justify-center h-[300px]">
      <p>Giỏ hàng trống</p>{' '}
    </div>
  );

  return (
    <div className="w-full flex flex-col justify-evenly py-1 px-36 bg-[#759b77] h-[150px]">
      <div className="flex ibtems-center justify-between">
        <nav>
          <ul className="flex items-center gap-3 text-sm text-white">
            <li>
              <Link to="/login/seller">{t('header.nav1')}</Link>
            </li>
            <li>
              <Link to="/signup/seller">{t('header.nav2')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.nav3')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.nav4')}</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center gap-3 text-sm text-white">
            <li>
              <Popover placement="topRight" content={content}>
                <Link to="/">{t('header.nav5')}</Link>
              </Popover>
            </li>
            <li>
              <Popover placement="topRight" content={popupEng}>
                <Link to="/">{t('header.nav6')}</Link>
              </Popover>
            </li>
            <li>
              <Link to="/">{t('header.nav7')}</Link>
            </li>
            {user.isSignedIn && user.user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/signup">{t('header.nav8')}</Link>
                <Link to="/login">{t('header.nav9')}</Link>
              </div>
            )}
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-evenly">
        <h3
          className="text-4xl font-bold text-white cursor-pointer"
          onClick={() => navigate('/')}
        >
          ONEWEED
        </h3>
        <div className="flex-1 px-7">
          {/* <input className="w-full px-2 py-2" placeholder="Tìm kiếm" /> */}
          <InputField
            name="email"
            control={control}
            placeholder="Tìm kiếm"
            className="py-2 rounded-none"
          />
        </div>
        <Popover placement="topRight" content={popupCart}>
          <div className="cursor-pointer">
            <Badge count={2}>
              <Cart />
            </Badge>
          </div>
        </Popover>
      </div>
      <div className="flex items-center justify-center">
        <nav>
          <ul className="flex items-center gap-3 text-sm text-white">
            <li>
              <Link to="/">{t('header.bottom1')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.bottom2')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.bottom3')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.bottom4')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.bottom5')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.bottom6')}</Link>
            </li>
            <li>
              <Link to="/">{t('header.bottom7')}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
