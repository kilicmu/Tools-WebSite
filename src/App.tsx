import React from "react";
import { router } from "./router/index";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {router.map((route, idx) => (
            <Route path={route.path} key={idx}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
