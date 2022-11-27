import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";

const getSrcFromFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
  });
};

const Logoload = () => {
  const [fileList, setFileList] = useState([
   
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    const src = file.url || (await getSrcFromFile(file));
    const imgWindow = window.open(src);

    if (imgWindow) {
      const image = new Image();
      image.src = src;
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };

  return (
    <div style={{margin:8,  padding:8,height:115,width:115, backgroundColor:"lightblue" ,borderRadius:10, marginLeft:1000,marginTop:-110, backgroundImage:"https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Image-File.png"}}>
      <ImgCrop grid rotate shape>
        <Upload
          fillColor="yellow"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && <h4 >+ Upload Logo</h4> }
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default Logoload;
