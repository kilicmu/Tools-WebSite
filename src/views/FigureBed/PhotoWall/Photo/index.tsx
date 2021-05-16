import React, {  useContext,  useEffect,  useState } from "react";
import { FigureBedService } from "../../useFigureBedService";
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
  const figureBedService = useContext(FigureBedService);

  let progressHiddenable = false
  if(rate >= 100) {
    progressHiddenable = true
  }

  useEffect(() => {
    if(rate >= 100) {
      setVisiable(false)
    }
  }, [rate])

  return (
    <div
      className={styleSheet.Photo}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPositionX: "45%",
        backgroundPositionY: "45%",
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
      }}
      onMouseEnter={() => progressHiddenable && setVisiable(true)}
      onMouseLeave={() => progressHiddenable && setVisiable(false)}
    >
     <Progress rate={rate} visiable={visiable} onDelete={() => figureBedService.delClientUrl(idx)}/>
    </div>
  );
};
