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
import UpdateProduct from './UpdateOrder';
import { deleteProduct, getAllCategory, getAllProduct } from '../../service/product';
import { formatMoney } from '../../utils';
import { deleteOrder, getAllOrder } from '../../service/order';


function Order() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [add, setAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [category, setCategory] = useState([]);
const [confirmed, setConfirmed] = useState(false);

  const columns = [
    {
      title: 'Tên',
      key: 'name',
      width: 120,
      dataIndex: 'User_id',
      fixed: 'left',
    },
    
    {
      title: 'Giá',
      key: 'name',
      render: (e) => <div className="text-[red]">{formatMoney(e.total_amount)} đ</div>,
      width: 130,
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
          <div>
  {confirmed ? (
    <p>Đã xác nhận</p>
  ) : (
    // ... (nội dung khác)
    <div
      className="px-[20px] py-[5px] rounded-[6px] bg-[#e9ba4d] border-[#e9ba4d] border-[1px] bg-opacity-25 space-x-[5px] text-[white] flex items-center cursor-pointer font-medium"
      onClick={() => {
        setDataUpdate(e);
        setOpenUpdate(true);
        setConfirmed(true); // Đặt confirmed thành true khi xác nhận
      }}
    >
      <span className="text-[#927532]">Xác nhận</span>
    </div>
  )}
</div>

          <div
            className="px-[20px] py-[5px] rounded-[6px] bg-[red] border-[red] border-[1px] bg-opacity-25 space-x-[5px] text-[white] flex items-center cursor-pointer font-medium"
            onClick={() => handleDelete(e.Order_id)}
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
  const getUserbyID = async () => {
    try {
      const response = await getUs();
      console.log(response, 'response');
      setCategory(response.data);
    } catch (error) {}
  };
  const getAll = async () => {
    setLoading(true);
    try {
      const response = await getAllOrder();
      console.log(response);
      setData(response);
    } catch (error) {
      console.error('Error fetching orders:', error);
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
      await deleteOrder(id);
      getAll();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='px-5'>
     
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        scroll={{ x: 2000 }}
      />
    </div>
  );
}

export default Order;
