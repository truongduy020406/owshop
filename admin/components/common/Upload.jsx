import React, { useEffect, useState } from "react";
import { Upload } from "antd";

function UploadFile({ value, onChange }) {
  const [img, setImg] = useState();
  const onChangeFile = (e) => {
    onChange?.(e.file.originFileObj);
    const image = window.URL.createObjectURL(e.file.originFileObj);
    setImg(image);
  };
  useEffect(() => {
    setImg(value);
  }, [value]);
  return (
    <Upload
      listType="picture-card"
      showUploadList={false}
      onChange={onChangeFile}
    >
      {img ? (
        <img src={img} alt="avatar" style={{ width: "100%", height: "100%" }} />
      ) : (
        "+upload"
      )}
    </Upload>
  );
}

export default UploadFile;
