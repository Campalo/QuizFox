import React, { Component } from 'react';
import DisplayQuestion from '../components/DisplayQuestion';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer from '../components/globalComponents/Footer';
import DisplayResult from '../components/DisplayResult';

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
      currentQuizNo: 0,
      score: 0
    };
    this.nextQuizOnClick = this.nextQuizOnClick.bind(this);
    this.scoreUpdateOnClick = this.scoreUpdateOnClick.bind(this);
  }

  //function to update counter if right answer is clicked
  scoreUpdateOnClick(e, key) {
    if (key === 0) {
      this.setState({ score: this.state.score + 1 });
    } else {
      this.setState({ score: this.state.score });
    }
    console.log('new score is: ', this.state.score);
  }

  //function to increment the CurrentQuestion value when a new Question is displayed after clicking on "Next Question" button
  nextQuizOnClick() {
    this.setState({
      currentQuizNo: this.state.currentQuizNo + 1,
      currentQuiz: this.state.listQuiz[this.state.currentQuiz + 1]
    });
    console.log('Current question number: ', this.state.currentQuizNo);
    console.log('Current Qustion: ', this.state.listQuiz[this.state.currentQuizNo + 1]);
  }

  componentDidMount() {
    console.log('[Quiz] componentDidMount');
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
      // the Quiz component "re-render" the listQuestions's value
      .then(allQuiz => {
        console.log('here is our result:', allQuiz);
        this.setState({
          listQuiz: allQuiz
        });
      });
  }

  render() {
    const currentQuiz = this.state.listQuiz[this.state.currentQuizNo];
    if (!currentQuiz) return <div />;
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>QA</h1>
          <DisplayQuestion
            currentQuiz={this.state.listQuiz[this.state.currentQuizNo]}
            currentQuizNo={this.state.currentQuizNo}
            amount={this.state.amount}
            nextQuizOnClick={this.nextQuizOnClick}
            scoreUpdateOnClick={this.scoreUpdateOnClick}
            score={this.state.score}
          />

          <DisplayResult
            //Here we pass ONLY the correct_answer value from the listQuiz object into the DisplayResult child
            correctAnswer={this.state.listQuiz.correct_answer}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
export default Quiz;
