import React from "react";
import styleSheet from "./index.module.scss";

interface IProps {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  className?: any;
  current?: boolean;
  children?: string;
}

export const MenuItem = (props: IProps) => {
  const { name, children, current } = props;
  const onClick = props.onClick ? props.onClick : () => {};

  return (
    <li
      {...props}
      key={name}
      onClick={onClick}
      className={current ? styleSheet.active : ""}
    >
      {children}
    </li>
  );
};
