import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Calculator from "./Calculator";
import Planner from "./Planner";
import Home from "./Home";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/CalculatorUsage" component={() => <Calculator mode={"usageBase"} /> }/>
      <Route path="/CalculatorTime" component={() => <Calculator mode={"timeBase"} /> } />
    </Switch>
  </main>
);
export default Main;
