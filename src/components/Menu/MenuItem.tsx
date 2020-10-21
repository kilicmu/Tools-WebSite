import React, { createRef, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router";
import styleSheet from "./index.module.scss";

interface IProps {
  to: string;
  className?: any;
  children?: string;
}

export const MenuItem = (props: IProps) => {
  const { children, to } = props;
  const history = useHistory();
  const location = useLocation();
  const ref = createRef<HTMLLIElement>();

  function goto() {
    history.push(to);
  }

  return (
    <li {...props} onClick={goto} ref={ref}>
      {children}
    </li>
  );
};
