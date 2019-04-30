import React, { Component } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";

class Quiz extends Component {
  render() {
    return (
      <div>
        <h1>QA</h1>
        <Question />
        <section>
          <Answer />
          <Answer />
          <Answer />
          <Answer />
        </section>
      </div>
    );
  }
}

export default Quiz;
