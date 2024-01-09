import { Button, Pagination, Select } from 'antd';
import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const FilterPannel = ({ products }) => {
  const location = useLocation();
  const [optionsFilterParams, setOptionsFilterParams] = useSearchParams();
  const pageParam = parseInt(optionsFilterParams.get('page'));

  useEffect(() => {
    if (!pageParam) {
      console.log('Run inner');
      optionsFilterParams.set('page', 1);
      setOptionsFilterParams(optionsFilterParams);
    }
  }, [location.pathname, location.search]);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span>Sắp xếp theo</span>
        <Button
          onClick={() => {
            optionsFilterParams.set('sortBy', 'relevancy');
            setOptionsFilterParams(optionsFilterParams);
          }}
        >
          Phổ biến
        </Button>
        <Button
          onClick={() => {
            optionsFilterParams.set('sortBy', 'sales');
            setOptionsFilterParams(optionsFilterParams);
          }}
        >
          Bán chạy
        </Button>
        <Select
          value={optionsFilterParams.get('orderByPrice') || ''}
          onChange={(value) => {
            optionsFilterParams.set('orderByPrice', value);
            setOptionsFilterParams(optionsFilterParams);
          }}
          className="w-[200px]"
          options={[
            { value: 'asc', label: 'Giá: Thấp đến cao' },
            { value: 'desc', label: 'Giá: Cao đến thấp' },
          ]}
        />
      </div>

      <div>
        <Pagination
          simple
          current={pageParam}
          defaultCurrent={1}
          total={products.length}
          onChange={(page) => {
            optionsFilterParams.set('page', page);
            setOptionsFilterParams(optionsFilterParams);
          }}
          defaultPageSize={10}
        />
      </div>
    </div>
  );
};

export default FilterPannel;
