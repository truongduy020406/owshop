import { Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useContext, useState } from "react";
import { InputNumber } from "antd";
import { Select } from "antd";
import UploadFile from "../common/Upload";
import { createProduct } from "../../service/product";
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const colorOptions = ["Trắng", "Vàng", "Đỏ", "Xanh"];
const sizeOptions = ["S", "M", "L", "XL"];
function AddProduct({ open, refresh, closeAdd, category }) {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();
  const submit = async (e) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('product_name', e.product_name)
    formData.append('img', e.image)
    formData.append('color', JSON.stringify(e.color))
    formData.append('size', JSON.stringify(e.size))
    formData.append('price', e.price)
    formData.append('stock_quantity', e.stock_quantity)
    formData.append('SubCategory_id', e.SubCategory_id)
    formData.append('description', e.description)
    formData.append('Store_id', 1)
    try {
      await createProduct(formData);
      refresh();
      onCloseAdd();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  const onCloseAdd = () => {
    closeAdd();
    form.resetFields();
  };
  return (
    <Modal
      title="Thêm Sản Phẩm"
      open={open}
      onCancel={onCloseAdd}
      footer={false}
    >
      <div className="max-h-[70vh] overflow-y-auto">
        <Form onFinish={submit} layout="vertical" form={form}>
          <Form.Item
            label="Tên Sản Phẩm"
            name="product_name"
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
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <CheckboxGroup options={colorOptions} />
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <CheckboxGroup options={sizeOptions} />
          </Form.Item>
          <Form.Item
            label="Giá"
            name="price"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <InputNumber size="large" />
          </Form.Item>
          <Form.Item
            label="Số Lượng"
            name="stock_quantity"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <InputNumber size="large" />
          </Form.Item>
          <Form.Item
            label="Thể Loại"
            name="SubCategory_id"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <Select
              size="large"
              style={{ width: 200 }}
              options={category.map((e) => ({
                value: e.Category_id,
                label: e.name,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <div>
            <Button
              htmlType="submit"
              className="w-full"
              size="large"
              loading={loading}
            >
              Thêm Sản Phẩm
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

export default AddProduct;
