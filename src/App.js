import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./Theme";
//import Navbar from "./components/Navbar";
//import QuestionsAPI from "./components/QuestionsAPI";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import NoPage from "./pages/NoPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={MyTheme}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/quiz/result" component={Result} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/404" component={NoPage} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
