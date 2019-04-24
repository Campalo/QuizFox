import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./Theme";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoryCard from "./components/Category";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={MyTheme}>
        <div className="App">
          <Navbar />
          <Header />
          <CategoryCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
