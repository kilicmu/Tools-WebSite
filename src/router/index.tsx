import React from "react";
import { Route, Switch, useLocation } from "react-router";
import ToolRoute from "./ToolRoute/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { loadableComponentFactory } from "../common/utils/loadableComponentFactory";
import "./animation.css";
import { Read } from "@views/Read";

const Home = loadableComponentFactory(() => import("../views/Home"))
const AllImages = loadableComponentFactory(() => import("../views/AllImages"))
export const AppRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition 
        key={location.key}
        classNames='fade'
        timeout={600}
      >
        <Switch location={location}>
          <Route key="home" path="/" exact>
            <Home />
          </Route>
          <Route key="tool" path="/tool">
            <ToolRoute />
          </Route>
          <Route path="">
            <Read />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}