import React, { Component } from 'react';
import htmlDecode from './Utility';

class DisplayQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: []
    };
  }
  //shuffle the buttons to display the answers in a random order
  shuffle(finalList) {
    for (let i = finalList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [finalList[i], finalList[j]] = [finalList[j], finalList[i]];
    }
    // use map f to extract the key value and populate (push) a new array list with the keys (after the shuffle)
    // array push
    finalList.map(value => {
      this.state.orderList.push(value.key);
      console.log('orderList', this.state.orderList);
    });

    return finalList;
  }

  render() {
    // let {
    //   currentQuiz,
    //   currentQuizNo,
    //   amount,
    //   nextQuizOnClick,
    //   scoreUpdateOnClick,
    //   score,
    //   incorrectButton,
    //   correctButton,
    //   colorUpdateOnClick,
    //   clicked
    // } = this.props;

    let finalList = [];

    // create an array called answersList and concat the 4 answers inside
    let answersList = []
      .concat(this.props.currentQuiz.correct_answer)
      .concat(this.props.currentQuiz.incorrect_answers);
    console.log('correct answer is:', this.props.currentQuiz.correct_answer);

    // push each item from answersList inside a button inside an array called finalList
    for (let i = 0; i < answersList.length; i++) {
      const buttonColor = i === 0 ? this.props.correctButton : this.props.incorrectButton;
      finalList.push(
        <button
          key={i}
          className={buttonColor}
          onClick={e => {
            this.props.scoreUpdateOnClick(e, i);
            this.props.colorUpdateOnClick();
          }}>
          {htmlDecode(answersList[i])}
        </button>
      );
    }

    let arrList = [];

    for (let i = 0; i < finalList.length; i++) {
      arrList.push(<button key={this.state.orderList[i]}>{htmlDecode(finalList[i])}</button>);
    }
    //check if there is an orderList array
    // if yes get back it's value
    // if not shuffle
    console.log('finalList:', finalList);
    finalList.filter(value => {
      console.log('key', value.key);
    });

    return (
      <div>
        <h2> Quiz time </h2>
        <h3>{htmlDecode(this.props.currentQuiz.question)}</h3>
        <section>{this.props.clicked ? finalList : this.shuffle(finalList)}</section>
        <p>
          Question {this.props.currentQuizNo + 1} on {this.props.amount}
        </p>
        <p>Score: {this.props.score}/100</p>
        {/* The onClick event works only inside a HTML tag not inside a component ex: "MyButton"
      If the onClick event is written as an arrow function then there is no need to bind it */}
        <button onClick={this.props.nextQuizOnClick}>Next Question</button>
      </div>
    );
  }
}

export default DisplayQuestion;
