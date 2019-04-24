import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// Theme:
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./Theme";
import Header from "./components/Header";
import QuestionsAPI from "./components/QuestionsAPI";

const renderHTML = (rawHTML: string) =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: rawHTML }
  });

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=1")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          question: json.results[0]
        });
      });
  }

  render() {
    return (
      <MuiThemeProvider theme={MyTheme}>
        <div className="App">
          <Navbar />
          <Header />
        </div>
        <QuestionsAPI />
      </MuiThemeProvider>
    );
  }
}

export default App;
