import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css'; 
import { MainPage, MoviePage } from "./Pages/";
function App() {
  return (
    <HashRouter>
      <Switch>

      <Route path="/" component={MainPage} />
      <Route path="/:ID" component={MoviePage} />

      </Switch>
    </HashRouter>
    );
}

export default App;
