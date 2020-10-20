import React from "react";
import styleSheet from "./index.module.scss";
import loading from "../../assets/gifs/loading.gif";

const Loading = () => {
  return (
    <React.Fragment>
      <div className={styleSheet.curtain}></div>
      <img src={loading} className={styleSheet.LoadingImg} />
    </React.Fragment>
  );
};

export { Loading };
