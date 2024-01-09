import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
import banner1 from '../../../public/images/banner/banner1.jpg';
import banner2 from '../../../public/images/banner/banner2.png';
import banner3 from '../../../public/images/banner/banner6.jpg';
import banner4 from '../../../public/images/banner/banner7.jpg';
import bannerT from '../../../public/images/banner/banner9.jpg';
import bannerB from '../../../public/images/banner/banner3.jpg';

const slideImages = [
  {
    image: banner1,
  },
  {
    image: banner2,
  },
  {
    image: banner3,
  },
  {
    image: banner4,
  },
];

const Banner = () => {
  return (
    <div className="container px-4 mx-auto mt-1">
      <div className="grid grid-cols-3 gap-1 grid-rows-2 h-[240px]">
        <div className="col-span-2 row-span-2">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="h-full mySwiper"
          >
            {slideImages.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="object-cover w-full h-full"
                  src={item.image}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <img className="object-cover w-full h-full" src={bannerT} alt="" />
        </div>
        <div>
          <img className="object-cover w-full h-full" src={bannerB} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
