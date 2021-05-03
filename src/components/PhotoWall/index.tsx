import React, {  useCallback, useContext, useState } from "react";
import { HomeService } from "../../views/Home/useHomeService";
import styleSheet from "./index.module.scss";
import { Photo } from "./Photo";

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

const allowReg = /(png|jpe?g|gif|bmp|png)$/
const validateExt = (ext: string): boolean => {
  ext = ext.toLocaleLowerCase()
  return allowReg.test(ext)
}

const _InnerPhotoWall = (props: IProps, ref: unknown) => {
  const { width, height } = props;
  const fileInput = fileInputCreator();
  const [fileList, setFileList] = useState([]);
  const homeService = useContext(HomeService);
  
  if(!homeService) {
    throw new Error("no service")
  }
  
  const toUpload = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    
    const file = e?.dataTransfer?.files[0];
    const splitedName = file.name.split('.')
    const ext = splitedName[splitedName.length - 1]

    if(!validateExt(ext)) alert("error: unexpect extension error")
    
    const formData = new FormData()
    formData.append("file", file);
    
    try{
        const {data: url} = await fetch("/upload", {
        method: 'POST',
        body: formData
      }).then<{data: string}>(resp => resp.json())
      
      homeService.setStaticUrls([...homeService.staticUrls, url])
    }catch(e){
      alert("上传失败")
    }
    e.preventDefault();
  }, [homeService]);
  return (
    <div
      className={styleSheet.PhotoWall}
      style={{ width, height }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={toUpload}
    >
      {
          homeService.clientUrls.map((url, idx) => {
            return <Photo src={url} idx={idx} rate={100} />
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
