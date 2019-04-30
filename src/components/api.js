import React, { Component } from "react";
import "./App.css";
import QuestionsAPI from "./components/QuestionsAPI";

class Api extends Component {
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
    return <QuestionsAPI question={this.state.question} />;
  }
}

export default Api;
