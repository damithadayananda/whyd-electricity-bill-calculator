import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import classNames from "classnames";
const style = {
  buttonOne: {
    borderRadius: 20,
    paddingLeft: 60,
    paddingRight: 60
  },
  buttonTwo: {
    borderRadius: 20
  }
};
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Button
              style={style.buttonTwo}
              href="/CalculatorUsage"
              variant="contained"
              color="primary"
            >
              Calculate Usage Base Bill
            </Button>
            <Button
              href="/CalculatorTime"
              style={style.buttonOne}
              variant="contained"
              color="primary"
            >
              Calculate Time Base Bill
            </Button>
          </div>
        </header>
      </div>
    );
  }
}
export default Home;
