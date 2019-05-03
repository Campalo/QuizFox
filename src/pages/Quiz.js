import React, { Component } from "react";
import DisplayQuestion from "../components/DisplayQuestion";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";
import getQuestion from "../Api";

class Quiz extends Component {
  constructor(props) {
    super(props);
    // match: get the category and difficulty parameters from the quiz url
    // this url is defined when the user choose a difficulty level on a CategoryCard
    const { category, difficulty } = props.match.params;
    // setState: set the initial values of the State, here it is empty
    this.state = {
      category,
      difficulty,
      quizQuestion: {}
    };
  }

  // will be triggered once the view is rendered (with default state)
  // to pass those two parameters inside the getQuestion function, who will make the request to the api
  componentDidMount() {
    getQuestion(this.state.category, this.state.difficulty)
      // then: receive the 10 questions and related answers and pass only the first question to the state
      // the Quiz component "re-render" the quizQuestion's value
      .then(result =>
        this.setState({
          quizQuestion: result[0]
        })
      );
  }

  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>QA</h1>
          <DisplayQuestion showQuestion={this.state.quizQuestion} />
        </main>
        <Footer />
      </div>
    );
  }
}
export default Quiz;
