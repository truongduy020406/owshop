import { useState } from 'react';

const DetailProduct = () => {
  const [largeImage, setLargeImage] = useState(
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llimqp9gifgodc_tn'
  );
  const smallImages = [
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llimqp9gifgodc_tn',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llimqp9gju140a_tn',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llimqp9gl8lkfb_tn',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llimqp9gmn6091',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmie6v2hlwwvf5_tn',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmie6v2hj3rz62_tn',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmie6v2hkicf69_tn',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmie6v2hhp7j97_tn',
  ];

  const handleImageHover = (imageUrl) => {
    setLargeImage(imageUrl);
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(selectedButton === buttonIndex ? null : buttonIndex);
  };
  const handleSizeButtonClick = (size) => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  const handleInputChange = (e) => {
    const newValue =
      e.target.value === ''
        ? 1
        : parseInt(e.target.value) >= 1
        ? parseInt(e.target.value)
        : 1;
    setQuantity(newValue);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Delete' && quantity === 1) {
      e.preventDefault();
    }
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="w-[80vw] mx-auto">
      <div className="flex justify-start items-center gap-[5px] mt-[15px]">
        <p className="text-[#4680bd] text-[13px]">Shoppe</p>
        <p></p>
        <p className="text-[#4680bd] text-[13px]">Thời trang nữ</p>
        <p></p>
        <p className="text-[#4680bd] text-[13px]">Áo khoác, Áo choàng & Vest</p>
        <p></p>
        <p className="text-[#4680bd] text-[13px]">Áo khoác ngoài</p>
        <p></p>
        <p className="text-black text-[13px]">
          Áo gió nữ YODY 3C PLUS 2 lớp cao cấp khoác nhẹ chống thấm nước, cản
          gió chống bụi NAK21 AKN5040
        </p>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div className="w-[45%] flex flex-col items-center">
          <img
            src={largeImage}
            alt=""
            height={250}
            width={250}
            className="transition-transform duration-300 transform hover:scale-110"
          />
          <div className="flex overflow-x-auto gap-[15px] mt-[20px] w-[350px]">
            {smallImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt=""
                height={82}
                width={82}
                className="hover:border-red-500 hover:border-[1px] cursor-pointer"
                onMouseEnter={() => handleImageHover(imageUrl)}
              />
            ))}
          </div>
        </div>
        <div className="w-[55%]">
          <div className="flex flex-col">
            <p className="text-black text-[20px] font-[500] leading-[24px]">
              Áo gió nữ YODY 3C PLUS 2 lớp cao cấp khoác nhẹ chống thấm nước,
              cản gió chống bụi NAK21 AKN5040
            </p>
            <div className="flex justify-between items-center mt-[15px]">
              <div className="flex justify-center items-center">
                <div
                  className="border-[1px] border-r-0 border-y-0 flex justify-center
                items-center px-[10px] gap-[2px]"
                >
                  <p className="text-black text-[14px]">45K</p>
                  <p className="text-gray-400 text-[13px]">Đánh Giá</p>
                </div>
                <div
                  className="border-[1px] border-r-0 border-y-0 flex justify-center
                items-center px-[10px] gap-[2px]"
                >
                  <p className="text-black text-[14px]">12,1K</p>
                  <p className="text-gray-400 text-[13px]">Đã Bán</p>
                </div>
              </div>
              <p className="text-gray-400 text-[13px]">Tố cáo</p>
            </div>
            <p className="text-[30px] font-[500] leading-[36px] text-[#d0031c] mt-[15px]">
              đ439.000
            </p>
            <div className="flex gap-[50px] items-center mt-[15px]">
              <p className="text-gray-400 text-[16px]">Màu Sắc</p>
              <div className="flex justify-center items-center gap-[10px]">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    className={`w-[100px] h-[50px] border-[1px] border-gray-300 rounded-[2px] 
                        text-black text-[16px] hover:border-red-500 hover:text-red-500 
                        ${
                          selectedButton === index
                            ? 'bg-red-500 text-white hover:text-white'
                            : ''
                        }`}
                    type="button"
                    onClick={() => handleButtonClick(index)}
                  >
                    {index === 0 && 'Cam'}
                    {index === 1 && 'Hồng'}
                    {index === 2 && 'Vàng'}
                    {index === 3 && 'Đen'}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-[80px] items-center mt-[25px]">
              <p className="text-gray-400 text-[16px]">Size</p>
              <div className="flex justify-center items-center gap-[10px]">
                {['S', 'M', 'L', 'XL'].map((size, index) => (
                  <button
                    key={index}
                    className={`w-[100px] h-[50px] border-[1px] border-gray-300 rounded-[2px] 
                        text-black text-[16px] hover:border-red-500 hover:text-red-500 
                        ${
                          selectedSize === size
                            ? 'bg-red-500 text-white hover:text-white'
                            : ''
                        }`}
                    type="button"
                    onClick={() => handleSizeButtonClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-[42px] items-center mt-[25px]">
              <p className="text-gray-400 text-[16px]">Số Lượng</p>
              <div className="flex gap-[20px] items-center">
                <div className="flex items-center">
                  <button
                    className="w-[50px] h-[40px] border-[1px] border-gray-300 rounded-[2px]
            text-gray-500 text-[25px] border-r-0"
                    type="button"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <div className="w-[80px] h-[40px] border-[1px] border-gray-300 justify-center items-center flex">
                    <input
                      className="w-[60px] h-[40px] placeholder:text-black placeholder:text-[20px]
              outline-none text-black text-[20px] bg-transparent"
                      type="number"
                      placeholder="1"
                      value={quantity}
                      onChange={handleInputChange}
                      onKeyDown={handleInputKeyDown}
                    />
                  </div>
                  <button
                    className="w-[50px] h-[40px] border-[1px] border-gray-300 rounded-[2px]
            text-gray-500 text-[25px] border-l-0"
                    type="button"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-400 text-[16px]">108 sản phẩm có sẵn</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-[15px] mt-[30px]">
              <button
                className="w-[200px] h-[50px] border-[1px] border-[#d0011b] rounded-[2px]
                    text-[#d0011b] text-[17px] bg-[#fceeef]"
                type="button"
              >
                Thêm Vào Giỏ Hàng
              </button>
              <button
                className="w-[200px] h-[50px] rounded-[2px]
                    text-white text-[17px] bg-[#d0011b]"
                type="button"
              >
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
