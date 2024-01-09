import { Pagination } from 'antd';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../productCard';

const Suggest = () => {
  const { products } = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const productsOnPage = useMemo(() => {
    const endIndex = currentPage * pageSize;
    return products.slice(endIndex - pageSize, endIndex);
  }, [currentPage, pageSize, products]);

  return (
    <div className="container mx-auto px-4 mt-5 ">
      <div className="border-b-4 border-[#759b77] flex justify-center items-center bg-white">
        <h1 className="text-[#759b77]  py-5 font-medium text-lg">Sản phẩm</h1>
        <span></span>
      </div>

      <div className="grid grid-cols-6 grid-rows-2 mt-3 gap-3 ">
        {productsOnPage.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <Pagination
          current={currentPage}
          onChange={(page, pageSize) => {
            setCurrentPage(page);
            setPageSize(pageSize);
          }}
          defaultPageSize={20}
          total={products.length}
        />
      </div>
    </div>
  );
};

export default Suggest;
