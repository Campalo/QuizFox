import React, { Component } from 'react';
import DisplayQuestion from '../components/DisplayQuestion';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer from '../components/globalComponents/Footer';
import DisplayResult from '../components/DisplayResult';
import '../App.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    // match: get the category and difficulty parameters from the quiz url defined in the CategoryCard
    const { category, difficulty } = props.match.params;
    // setState: set the initial values of the State
    this.state = {
      category,
      difficulty,
      amount: 10,
      type: 'multiple',
      listQuiz: [],
      //currentQuizNo is our index so it start from 0
      currentQuizNo: 0,
      score: 0,
      //Default color for the buttons + update color when click correct/incorrect
      incorrectButton: 'brown',
      correctButton: 'brown',
      answerClicked: false
    };
    this.nextQuizOnClick = this.nextQuizOnClick.bind(this);
    this.scoreUpdateOnClick = this.scoreUpdateOnClick.bind(this);
    this.colorUpdateOnClick = this.colorUpdateOnClick.bind(this);
  }

  //function to update counter if right answer is clicked
  scoreUpdateOnClick(e, key) {
    if (this.state.answerClicked) return;
    if (key === 0) {
      this.setState({ score: this.state.score + 10 });
    } else {
      this.setState({ score: this.state.score });
    }
  }
  //function to update color when clicked
  colorUpdateOnClick() {
    this.setState({ correctButton: 'green', incorrectButton: 'red' });
    this.setState({ answerClicked: true });
  }

  //function to increment the CurrentQuiz number to be able to go to next question
  //+ reset the button default color
  nextQuizOnClick() {
    this.setState({
      currentQuizNo: this.state.currentQuizNo + 1,
      correctButton: 'brown',
      incorrectButton: 'brown',
      answerClicked: false
    });
  }

  componentDidMount() {
    console.log('[Quiz] componentDidMount');
    // ex: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
    let url = `https://opentdb.com/api.php?amount=${this.state.amount}&category=${
      this.state.category
    }&difficulty=${this.state.difficulty}&type=${this.state.type}`;

    //fetch: make a request to the server to get the info we are looking for based on the Query Parameters we defined
    fetch(url)
      // then: receive the info (response) and transform it into json format
      .then(response => response.json())
      // then: return only the array with the info we want (questions and answers)
      .then(json => json.results)
      // then: receive the 10 questions and related answers but pass only the first question to the state
      // the Quiz component "re-render" the listQuestions's value
      .then(allQuiz => {
        this.setState({
          listQuiz: allQuiz
        });
      });
  }

  render() {
    // if listQuiz array is empty then return nothing, wait for the re-render to display the child
    if (this.state.listQuiz.length === 0) return <div />;

    // if currentQuizNo is smaller than amout(10) then return Question child, if not return Result child
    const displayChild =
      this.state.currentQuizNo < this.state.amount ? (
        <DisplayQuestion
          currentQuiz={this.state.listQuiz[this.state.currentQuizNo]}
          currentQuizNo={this.state.currentQuizNo}
          amount={this.state.amount}
          nextQuizOnClick={this.nextQuizOnClick}
          colorUpdateOnClick={this.colorUpdateOnClick}
          correctButton={this.state.correctButton}
          incorrectButton={this.state.incorrectButton}
          scoreUpdateOnClick={this.scoreUpdateOnClick}
          score={this.state.score}
          answerClicked={this.state.answerClicked}
        />
      ) : (
        <DisplayResult score={this.state.score} amount={this.state.amount} />
      );

    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <section>{displayChild}</section>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Quiz;
