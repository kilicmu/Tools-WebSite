import React, { useState } from "react";
import styleSheet from "./index.module.scss";

interface ILogo {
  path: string;
  link?: string;
}

interface IProps {
  logo: ILogo;
  width?: string;
  height?: string;
  children: JSX.Element[];
}

const _Header = ({ logo, children }: IProps, ref: any) => {
  const [state, setState] = useState();

  /**
   * 处理menu改变的动画
   * @param e event
   */
  const changeActive = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const targetElm = e.target as any;
    const allLis = targetElm.parentElement.children;
    for (let i of allLis) {
      i.classList.remove(styleSheet.active);
    }
    targetElm.classList.add(styleSheet.active);
    console.log(targetElm, allLis);
    e.preventDefault();
  };

  return (
    <header className={styleSheet.MenuHeader}>
      <img src={logo.path} className={styleSheet.logo}></img>
      <ul ref={ref} onClick={changeActive}>
        {children.map((item) => item)}
        <div style={{ height: 70, width: 60 }}></div>
      </ul>
    </header>
  );
};

export const HeaderMenu = React.forwardRef<HTMLElement, IProps>(_Header);
