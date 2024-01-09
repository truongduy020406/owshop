import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Header from '../../components/landing/Header';
import Footer from '../../components/landing/Footer';
import { Link, useParams } from 'react-router-dom';
import FilterProductContainer from '../../components/filterProduct/FilterProductContainer';
import { getProductBySubcategory, getSubCategory } from '../../api';
import { UnorderedListOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const CategoryPage = () => {
  const { id } = useParams();
  const [subCategories, setSubCategories] = useState([]);
  const { products } = useSelector((state) => state.product);
  const [subCategoryProduct, setSubCategoryProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getSubCategory(id);
      setSubCategories(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data: productWithCategory } = await getProductBySubcategory(id);
      const mockData = [];
      mockData.push(...productWithCategory);
      for (let i = 0; i <= 20; i++) {
        mockData.push(productWithCategory[productWithCategory.length - 1]);
      }
      setSubCategoryProduct(mockData);
    })();
  }, [id]);

  return (
    <DefaultLayout>
      <Header />
      <div className="container mx-auto">
        <div className="flex gap-4 px-6 pt-8 pb-20">
          <div className="categories max-w-[250px] w-full">
            <div className="flex gap-4 pb-2 border-b-2 border-gray-200 text-[22px] font-bold">
              <UnorderedListOutlined />
              <h2>Tất Cả Danh Mục</h2>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              {subCategories.map((item, index) => (
                <Link
                  className="text-md"
                  key={index}
                  to={`/category/${item.SubCategory_id}`}
                >
                  {item.Name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <FilterProductContainer products={subCategoryProduct} />
          </div>
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
};

export default CategoryPage;
