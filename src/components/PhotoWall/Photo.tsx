import { url } from "inspector";
import React, { createRef, useState } from "react";
import styleSheet from "./index.module.scss";

interface IProps {
  src: string;
  width?: number;
  height?: number;
}

export const Photo = (props: IProps) => {
  const { src } = props;
  const [showable, changeShowable] = useState(true);
  const ref = createRef<HTMLDivElement>();
  const reverseShowState = () => changeShowable((val) => !val);
  return (
    <div
      className={styleSheet.Photo}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPositionX: "45%",
        backgroundPositionY: "45%",
      }}
      onMouseEnter={reverseShowState}
      onMouseLeave={reverseShowState}
    >
      <div
        className={styleSheet.progress}
        ref={ref}
        style={{ visibility: showable ? "visible" : "hidden" }}
      >
        <div className={styleSheet.delete}></div>
        <div className={styleSheet.ProgressBar}></div>
      </div>
    </div>
  );
};
