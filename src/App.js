import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./Theme";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoryCard from "./components/Category";
import QuestionsAPI from "./components/QuestionsAPI";

class App extends Component {
  constructor() {
    super();
    this.state = {
      question: []
    };
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
          <section id="categoryCards">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </section>
        </div>
        <QuestionsAPI question={this.state.question} />
      </MuiThemeProvider>
    );
  }
}

export default App;
