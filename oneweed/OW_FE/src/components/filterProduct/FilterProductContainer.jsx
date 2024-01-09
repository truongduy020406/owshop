import React, { useMemo } from 'react';
import FilterPannel from './FilterPannel';
import ProductCard from '../productCard';
import { useParams, useSearchParams } from 'react-router-dom';

const FilterProductContainer = ({ products }) => {
  const [optionFilterParams, setOptionFilterParams] = useSearchParams();

  const productsOnPage = useMemo(() => {
    const pageIndex = optionFilterParams.get('page');
    const endIndex = pageIndex * 10;
    const startIndex = (pageIndex - 1) * 10;
    return products.slice(startIndex, endIndex);
  }, [optionFilterParams, products]);

  const productsSorted = useMemo(() => {
    const sortBy = optionFilterParams.get('orderByPrice');

    if (sortBy === 'asc' || sortBy === 'desc') {
      return [...productsOnPage].sort((a, b) => {
        const order = sortBy === 'asc' ? 1 : -1;
        return (a.price - b.price) * order;
      });
    }

    return productsOnPage;
  }, [optionFilterParams, productsOnPage]);

  return (
    <div>
      <FilterPannel products={products} />

      <div className="grid grid-cols-5 gap-3 pt-6">
        {productsSorted.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FilterProductContainer;
