import { useEffect, useState } from 'react';
import { getCategories } from '../../api';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      setCategories(data.data);
    })();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-white  mt-4 ">
      <h1 className="text-[20px] py-3">Danh mục</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={7}
        spaceBetween={10}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="text-center cursor-pointer"
              onClick={() => navigate(`/category/${item.Category_id}`)}
            >
              <img
                className="object-cover w-[150px] h-[150px]"
                src={item.image}
                alt=""
              />
              <p className="pt-2">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
