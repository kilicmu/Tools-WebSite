import { url } from "inspector";
import React from "react";
import styleSheet from "./index.module.scss";

interface IProps {
  src: string;
  width?: number;
  height?: number;
}

export const Photo = (props: IProps) => {
  const { src } = props;
  return (
    <div
      className={styleSheet.Photo}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPositionX: "45%",
        backgroundPositionY: "45%",
      }}
    />
  );
};
