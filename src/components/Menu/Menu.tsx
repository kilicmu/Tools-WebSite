import React, { useState } from "react";
import { MenuItem } from "./MenuItem";
import styleSheet from "./index.module.scss";

interface IProps {
  logo: string;
  width?: string;
  height?: string;
  children: JSX.Element[];
}

const _Header = ({ logo, children }: IProps, ref: any) => {
  const [state, setState] = useState();
  return (
    <header className={styleSheet.MenuHeader}>
      <img src={logo} className={styleSheet.logo}></img>
      <ul ref={ref}>{children.map((item) => item)}</ul>
    </header>
  );
};

export const HeaderMenu = React.forwardRef<HTMLElement, IProps>(_Header);
