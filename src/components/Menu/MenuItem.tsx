import React, { createRef, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router";
import styleSheet from "./index.module.scss";

interface IProps {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  className?: any;
  style?: React.CSSProperties;
  current?: boolean;
  children?: string;
}

export const MenuItem = (props: IProps) => {
  const { name, children, current, style } = props;
  const onClick = props.onClick ? props.onClick : () => {};

  return (
    <li
      {...props}
      key={name}
      onClick={onClick}
      className={current ? styleSheet.active : ""}
      style={style ? style : undefined}
    >
      {children}
    </li>
  );
};
