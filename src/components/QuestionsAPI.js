import React, { Component } from "react";

const renderHTML = (rawHTML: string) =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: rawHTML }
  });

export default class QuestionsAPI extends Component {
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
    var { isLoaded, question } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h5>{renderHTML(question.question)}</h5>
          <p>{renderHTML(question.correct_answer)}</p>
          <p>{renderHTML(question.incorrect_answers)}</p>
        </div>
      );
    }
  }
}
