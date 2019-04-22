import React, { Component } from "react";
import "./App.css";
// Theme:
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./Theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={MyTheme}>
        <div className="App" />
      </MuiThemeProvider>
    );
  }
}

export default App;
