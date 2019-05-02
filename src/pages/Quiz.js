//we use useState() (a state hook) instaead of setState
import React, { Component } from "react";
import DisplayQuestion from "../components/DisplayQuestion";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";
import getQuestion from "../Api";

class Quiz extends Component {
  constructor(props) {
    super(props);
    // get the category and difficulty parameters from the quiz url which is defined
    // when the user click on the difficulty button on the CategoryCard on the Category page
    const { category, difficulty } = props.match.params;
    // Set the initial values of the State
    this.state = {
      category,
      difficulty,
      questionAnswer: {}
    };
  }

  // Triggered once the view is rendered
  componentDidMount() {
    // pass those to parameters inside the getQuestion function, who will make the request to the api
    getQuestion(this.state.category, this.state.difficulty)
      // receive the 10 questions and related answers and pass only the first question to the state
      .then(result =>
        this.setState({
          questionAnswer: result[0]
        })
      );
  }

  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>QA</h1>
          <DisplayQuestion showQuestionAnswers={this.state.questionAnswer} />
        </main>
        <Footer />
      </div>
    );
  }
}
export default Quiz;
