import { createCategory } from "@/service/category";
import { Button, Form, Input, Modal } from "antd";
import React from "react";
import UploadFile from "../common/Upload";

function AddUser({ open, refresh, closeAdd }) {
  const [form] = Form.useForm();
  const submit = async (e) => {
    const formData = new FormData()
    formData.append('name', e.name)
    formData.append('img', e.image)
    await createCategory(formData);
    refresh();
    onCloseAdd();
  };
  const onCloseAdd = () => {
    closeAdd();
    form.resetFields();
  };
  return (
    <Modal
      title="Tạo Thể Loại"
      open={open}
      onCancel={onCloseAdd}
      footer={false}
    >
      <Form onFinish={submit} layout="vertical" form={form}>
        <Form.Item
          label="Tên Thể Loại"
          name="name"
          rules={[{ required: true, message: "Không được bỏ trống!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Ảnh"
          name="image"
          rules={[{ required: true, message: "Không được bỏ trống!" }]}
        >
          <UploadFile />
        </Form.Item>
        <div>
          <Button htmlType="submit" className="w-full" size="large">
            Tạo
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddUser;
