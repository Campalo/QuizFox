import React, { Component } from "react";
import ResultCard from "./components/ResultCard";
import MyButton from "./components/Button";

class Result extends Component {
  render() {
    return (
      <div>
        <ResultCard />
        <section>
          <MyButton>Play again</MyButton>
          <MyButton>Choose new category or difficulty level</MyButton>
        </section>
      </div>
    );
  }
}

export default ResultCard;
