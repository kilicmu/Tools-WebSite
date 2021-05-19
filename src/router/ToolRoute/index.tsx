import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ToolsPage from "@views/ToolsPage"
import FigureBed from "@views/FigureBed"


export default function ToolRoute(){
    const routeMatch = useRouteMatch()
    return (
        <Switch>
            <Route path={`${routeMatch.path}/`} exact>
                <ToolsPage />
            </Route>
            <Route path={`${routeMatch.path}/figure-bed`}>
                <FigureBed />
            </Route>
            <Route path={`${routeMatch.path}/tool2`}>
                <div>tool2</div>
            </Route>
        </Switch>
    )
}