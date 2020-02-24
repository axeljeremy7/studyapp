import React from "react";
import Topbar from "./components/Topbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Pages from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Redirect from="/" to="/home" exact />
        {Pages.map((page, index) => (
          <Route {...page.routeProps} key={index} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
