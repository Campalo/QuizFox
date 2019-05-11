import React, { Component } from 'react';
import DisplayQuestion from '../components/DisplayQuestion';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer from '../components/globalComponents/Footer';
import DisplayResult from '../components/DisplayResult';

class Quiz extends Component {
  constructor(props) {
    super(props);
    // match: get the category and difficulty parameters from the quiz url
    // this url is defined when the user choose a difficulty level on a CategoryCard
    const { category, difficulty } = props.match.params;
    // setState: set the initial values of the State
    this.state = {
      category,
      difficulty,
      amount: 10,
      type: 'multiple',
      quizQuestion: {},
      currentQuestion: 1,
      score: 0,
      //Default color for the buttons + update color when click correct/incorrect
      incorrectButton: '',
      correctButton: '',
    };

    this.incrementOnClick = this.incrementOnClick.bind(this);
    this.scoreUpdateOnClick = this.scoreUpdateOnClick.bind(this);
    this.colorUpdateOnClick = this.colorUpdateOnClick.bind(this);
  }
  //function to update counter if right answer is clicked
  scoreUpdateOnClick(e, key) {
    if (key === 0) {
      this.setState({ score: this.state.score + 1 });
    } else {
      this.setState({ score: this.state.score });
    }
    console.log('correct answer is: ', this.state.quizQuestion.correct_answer);
    console.log('new score is: ', this.state.score);
  }
  //function to update color when clicked
  colorUpdateOnClick() {
    this.setState({ correctButton: 'green' });
    this.setState({ incorrectButton: 'red' });
  }

  //function to increment the CurrentQuestion value when a new Question is displayed after clicking on "Next Question" button
  incrementOnClick() {
    console.log('Current question: ', this.state.currentQuestion);
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  }

  componentDidMount() {
    // ex: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
    const url = `https://opentdb.com/api.php?amount=${this.state.amount}&category=${
      this.state.category
    }&difficulty=${this.state.difficulty}&type=${this.state.type}`;
    //fetch: make a request to the server to get the info we are looking for based on the Query Parameters we defined
    fetch(url)
      // then: receive the info (response) and transform it into json format
      .then(response => response.json())
      // then: return only the array with the info we want (questions and answers)
      .then(json => json.results)
      // then: receive the 10 questions and related answers but pass only the first question to the state
      // the Quiz component "re-render" the quizQuestion's value
      .then(result =>
        this.setState({
          quizQuestion: result[0],
        })
      );
  }

  //function to update the score with an if Statement

  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>QA</h1>
          <DisplayQuestion
            //Here we pass ALL the values from the quizQuestion object into the DisplayQuestion child
            quizQuestion={this.state.quizQuestion}
            currentQuestion={this.state.currentQuestion}
            amount={this.state.amount}
            incrementOnClick={this.incrementOnClick}
            scoreUpdateOnClick={this.scoreUpdateOnClick}
            score={this.state.score}
            incorrectButton={this.state.incorrectButton}
            correctButton={this.state.correctButton}
            colorUpdateOnClick={this.colorUpdateOnClick}
          />
          <DisplayResult
            //Here we pass ONLY the correct_answer value from the quizQuestion object into the DisplayResult child
            correctAnswer={this.state.quizQuestion.correct_answer}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
export default Quiz;
