import React, { Component } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";

class Quiz extends Component {
  render() {
    return (
      <div>
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
