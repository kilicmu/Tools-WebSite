import React, {  useContext,  useState } from "react";
import { HomeService } from "../../../views/Home/useHomeService";
import { Progress } from "../../Progress";
import styleSheet from "../index.module.scss";

interface IPhotoProps {
  idx: number;
  src: string;
  rate: number;
  width?: number;
  height?: number;
}

export const Photo: React.FC<IPhotoProps> = (props) => {
  const { rate, src, idx } = props;
  const [ visiable, setVisiable ] = useState(true);
  const homeService = useContext(HomeService);

  let progressHiddenable = false
  if(rate >= 100) {
    progressHiddenable = true
  } 

  return (
    <div
      className={styleSheet.Photo}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPositionX: "45%",
        backgroundPositionY: "45%",
      }}
      onMouseEnter={() => progressHiddenable && setVisiable(true)}
      onMouseLeave={() => progressHiddenable && setVisiable(false)}
    >
     <Progress rate={rate} visiable={visiable} onDelete={() => homeService.delClientUrl(idx)}/>
    </div>
  );
};
