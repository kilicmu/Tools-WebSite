import React from "react";
import styleSheet from "./index.module.scss";
import cancelSVG from "@assets/svgs/cancel.svg";


interface IProgressProps {
    rate: number;
    wrapper?: boolean;
    visiable?: boolean;
    onDelete?: (idx?: number) => void;
}



export const Progress: React.FC<IProgressProps> = (props) => {
    let { rate } = props;
    
    const {
        visiable = false,
        onDelete = () => {}
    } = props;
    
    let safeRate = rate
    if(rate < 0) safeRate = 0 
    if(rate > 100) safeRate = 100
    
    return (
        <div
        className={styleSheet.progress}
        style={{visibility: visiable ? 'visible' : 'hidden'}}
       
      >
        <img src={cancelSVG} alt="cancel" className={styleSheet.delete} onClick={() => onDelete()}/>
        <div className={styleSheet.ProgressBar}>
          <div className={styleSheet.ProgressBar__mask} style={{transform: `translateX(-${100 - safeRate}%)`}}></div>
        </div>
      </div>
    )
}