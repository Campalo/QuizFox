import React, { Component } from "react";
import "./App.css";
// Theme:
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./Theme";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={MyTheme}>
        <div className="App">
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
