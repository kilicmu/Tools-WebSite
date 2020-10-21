import React, { Children, useCallback, useState } from "react";
import { regularChildren } from "../../common/utils/regularChildren";
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

const _InnerPhotoWall = (props: IProps, ref: unknown) => {
  const { width, height, children } = props;
  const fileInput = fileInputCreator();
  const [fileList, setFileList] = useState([]);
  const uploadController = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e?.dataTransfer?.files[0];
  }, []);
  return (
    <div
      className={styleSheet.PhotoWall}
      style={{ width, height }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={uploadController}
    >
      {regularChildren(children!).map((item) => item)}
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
