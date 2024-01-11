import React, { useState } from 'react';
import { updateStore } from '../../../service/user';
import { useSelector } from 'react-redux';
import { useUser } from '@clerk/clerk-react';

const SellerTransport = () => {
  const [namestore,setNameStore] =useState()
  const userd = useUser();

  const handleNameStore =async ()=>{
    const id =  userd.user.id;
   
    const datas ={
      namestore : namestore
    }
      const data= await updateStore(id,datas)
      console.log(data);
  }
  return (

    <div>
      Nhập tên cửa hàng
      <input type="text" placeholder='Nhập tên cửa hàng' value={namestore} onChange={(e)=>{setNameStore(e.target.value)}}/>
      <button onClick={handleNameStore}>Xác nhận</button>
    </div>
  );
};

export default SellerTransport;
