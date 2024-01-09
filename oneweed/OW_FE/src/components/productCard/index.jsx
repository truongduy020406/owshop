import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div
      className="bg-white  hover:shadow-md hover:-translate-y-1 transition-transform duration-300 ease-in-out relative"
      href=""
    >
      <a href="">
        <div className="pt-[-1px]">
          <img
            className="w-full h-[200px] object-cover"
            src={item.image}
            alt=""
          />
        </div>
        <div className="p-2">
          <div className="line-clamp-2">{item.product_name}</div>
          <div className="flex justify-start my-1">
            <div className="text-xs bg-orange-500 text-slate-200 mr-2 px-1">
              <span>{item.discount}</span>
            </div>
            <div className="text-xs border border-red-600 text-red-600 bg-white px-1">
              <span>{item.saleType}</span>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="text-red-600">
              <span className="text-xs">₫</span>
              <span>{item.price.toLocaleString('en-US')}</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">{item.sold}</span>
            </div>
          </div>
        </div>
        <div className="bg-red-600 text-white w-16 text-sm text-center absolute top-3">
          <span>Yeu thich</span>
        </div>
        <div className="bg-amber-400 text-red-600 w-16 text-sm text-center absolute top-3 right-0">
          <span>-40%</span>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
