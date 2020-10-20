import React, { useState } from "react";
import { pathToFileURL } from "url";
import styleSheet from "./index.module.scss";
import { Router, Route, Link } from "react-router-dom";

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
  const changeActive = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const targetElm = e.target as any;
    const allLis = targetElm.parentElement.children;
    for (let i of allLis) {
      i.classList.remove(styleSheet.active);
      console.log(i);
    }
    targetElm.classList.add(styleSheet.active);
    // e.preventDefault();
  };
  return (
    <header className={styleSheet.MenuHeader}>
      <img src={logo.path} className={styleSheet.logo}></img>
      <ul ref={ref} onClick={changeActive}>
        {children.map((item) => item)}
      </ul>
    </header>
  );
};

export const HeaderMenu = React.forwardRef<HTMLElement, IProps>(_Header);
