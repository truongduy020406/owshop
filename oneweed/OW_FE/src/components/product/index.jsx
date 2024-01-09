import {
  HighlightOutlined,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import { Button, Table } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'antd';
import moment from 'moment/moment';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import { deleteProduct, getAllCategory, getAllProduct } from '../../service/product';
import { formatMoney } from '../../utils';

function Product() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [add, setAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [category, setCategory] = useState([]);
  const columns = [
    {
      title: 'Tên',
      key: 'name',
      width: 120,
      dataIndex: 'product_name',
      fixed: 'left',
    },
    {
      title: 'Ảnh',
      key: 'link',
      fixed: 'left',
      width: 250,
      render: (e) => (
        <Image src={e.image} width={150} height={100} alt="" preview={false} />
      ),
    },
    {
      title: 'Số Lượng',
      key: 'name',
      dataIndex: 'stock_quantity',
      width: 150,
    },
    {
      title: 'Giá',
      key: 'name',
      render: (e) => <div className="text-[red]">{formatMoney(e.price)} đ</div>,
      width: 130,
    },
    {
      title: 'Color',
      key: 'name',
      width: 100,
      render: (e) => (
        <div className="flex items-center">
          {e.color && 
            JSON.parse(e.color).map((c, i) => {
              return (
                <div key={c}>
                  {c}
                  {i + 1 !== e.color.length ? ', ' : ''}
                </div>
              );
            })}
        </div>
      ),
    },
    {
      title: 'Size',
      key: 'name',
      render: (e) => (
        <div className="flex items-center">
          {e.size && 
            JSON.parse(e.size).map((c, i) => {
              return (
                <div key={c}>
                  {c}
                  {i + 1 !== e.size.length ? ', ' : ''}
                </div>
              );
            })}
        </div>
      ),
      width: 100,
    },
    {
      title: 'Mô tả',
      key: 'name',
      width: 300,
      render: (e) => (
        <div className="min-w-[250px] max-w-[250px] truncate">
          {e.description}
        </div>
      ),
    },
    {
      title: 'Thời Gian Tạo',
      key: 'name',
      render: (e) => (
        <span>{moment(e.createdAt).format('hh:mm DD/MM/YYYY')}</span>
      ),
    },
    {
      title: 'Thao Tác',
      key: 'action',
      render: (e) => (
        <div className="flex items-center space-x-[10px]">
          <div
            className="px-[20px] py-[5px] rounded-[6px] bg-[#e9ba4d] border-[#e9ba4d] border-[1px] bg-opacity-25 space-x-[5px] text-[white] flex items-center cursor-pointer font-medium"
            onClick={() => {
              setDataUpdate(e);
              setOpenUpdate(true);
            }}
          >
            <span className="text-[#927532]">Sửa</span>
          </div>
          <div
            className="px-[20px] py-[5px] rounded-[6px] bg-[red] border-[red] border-[1px] bg-opacity-25 space-x-[5px] text-[white] flex items-center cursor-pointer font-medium"
            onClick={() => handleDelete(e.Product_id)}
          >
            <span className="text-[red]">Xoá</span>
          </div>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getAll();
    getCategory();
  }, []);
  const getCategory = async () => {
    try {
      const response = await getAllCategory();
      console.log(response, 'response');
      setCategory(response.data);
    } catch (error) {}
  };
  const getAll = async () => {
    setLoading(true);
    try {
      const response = await getAllProduct();
      console.log(response);
      setLoading(false);
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const closeAdd = () => {
    setAdd(false);
    setOpenUpdate(false);
  };
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      getAll();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='px-5'>
      <div className="mb-5">
        <Button size="large" onClick={() => setAdd(true)}>
          Thêm Sản Phẩm
        </Button>
      </div>
      <AddProduct
        category={category}
        open={add}
        refresh={getAll}
        closeAdd={closeAdd}
      />
      <UpdateProduct
        category={category}
        open={openUpdate}
        refresh={getAll}
        closeAdd={closeAdd}
        data={dataUpdate}
      />
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        scroll={{ x: 2000 }}
      />
    </div>
  );
}

export default Product;
