import React, { useEffect, useState }  from "react";
import { useLocation, useRouteMatch } from "react-router";
import styleSheet from "./menu.module.scss";
import classNames from "classnames";
import { useMobile } from "../../../common/resopnsive/useMobile";

interface IProps {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  className?: any;
  style?: React.CSSProperties;
  current?: boolean;
  children?: string;
}

export const MenuItem = (props: IProps) => {
  const { name, children,  style } = props;
  const [current, setCurrent] = useState(!!props.current)
  const onClick = props.onClick ? props.onClick : () => {};
  const location = useLocation()
  const isMobile = useMobile()

  useEffect(() => {
    const pname = location.pathname.match(/^\/(.*?)\/?$/)?.[1] ?? ''
    console.log(pname, name, !current)
    if(pname === name && !current) {
      setCurrent(true)
    } else {
      setCurrent(false)
    }
  }, [location])
  
  return (
    <li
      {...props}
      key={name}
      onClick={onClick}
      className={classNames([
        current ? styleSheet.active: '', 
        isMobile ? styleSheet["mobile-li"] : '',
        current && isMobile ? styleSheet["mobile-li--active"]: ''
      ])}
      style={style ? style : undefined}
    >
      {children}
    </li>
  );
};
