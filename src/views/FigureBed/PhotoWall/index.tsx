import React, {  useCallback, useContext, useState } from "react";
import { FigureBedService } from "../useFigureBedService";
import styleSheet from "./index.module.scss";
import { Photo } from "./Photo";
import axios from "axios";
import uploadSrc from "@/assets/images/upload-icon.png";

interface IProps {
  width?: number; // width: 照片墙宽度 default: 100%;
  height?: number; // height: 照片墙高度 defalut: width / 2
  children?: JSX.Element[] | JSX.Element | null;
}

interface IFile {
  filename: string;
  path: string;
}

interface IState {
  fileList: IFile[];
}

interface Response {
  data: string;
  msg: string;
  status: number;
}

const allowReg = /(png|jpe?g|gif|bmp|png)$/
const isValidatedExt = (ext: string): boolean => {
  ext = ext.toLocaleLowerCase()
  return allowReg.test(ext)
}

const _InnerPhotoWall = (props: IProps, ref: unknown) => {
  const { width, height } = props;
  const figureBedService = useContext(FigureBedService);
  const [progress, setProgress] = useState(0);
  
  if(!figureBedService) {
    throw new Error("no service")
  }
  
  const toUpload = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e?.dataTransfer?.files[0];

    const splitedName = file.name.split('.')
    const ext = splitedName[splitedName.length - 1]

    if(!isValidatedExt(ext)) {
      alert("error: unexpected extension error")
      return 
    }

    const reader = new FileReader();
    let cancelAddClientUrl: any = null
    reader.readAsDataURL(file)
    // const url = reader
    reader.onload = () => {
      const url = reader.result
      if(url) {
        if(typeof url === 'string') {
          cancelAddClientUrl = figureBedService.addClientUrl(url)
        }
      }else {
        alert("read file error")
      }
    }

    
    
    const formData = new FormData()
    formData.append("file", file);

    try{
      axios.post<Response>("/upload", formData, {
        onUploadProgress(e:ProgressEvent) {
          setProgress((e.loaded / e.total) * 100)
        }
      }).then(({data: {data: url, status}}) => {
        switch(status) {
          case 200: 
           figureBedService.setStaticUrls([...figureBedService.staticUrls, url])
           break;
          case 430:
            alert("请避免频繁上传")
            cancelAddClientUrl && cancelAddClientUrl()
            break;
          default: 
            return null
        }
      })
    }catch(e){
      alert("上传失败")
    }
    
  }, [figureBedService]);
  return (
    <div
      className={styleSheet.PhotoWall}
      style={{ width, height }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={toUpload}
    >
      {
          figureBedService.clientUrls.length === 0 ? 
          <div className={styleSheet["upload-holder"]}></div>: 
          figureBedService.clientUrls.map((url, idx) => {
            return <Photo key={idx} src={url} idx={idx} rate={progress} />
          }) 
        }
    </div>
  );
};

const PhotoWall = React.forwardRef<unknown, IProps>(_InnerPhotoWall);

const fileInputCreator = () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  return fileInput;
};

export { PhotoWall };
