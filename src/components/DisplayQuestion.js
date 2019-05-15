import React, { Component } from 'react';
import htmlDecode from './Utility';

class DisplayQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //set default state for orderList : empty array
      orderList: []
    };
    // create a property of the class component to access it everywhere inside this component
    // better than a const that can be accessible only locally (scope)
    this.updatedOrderList = [];
  }

  //shuffle the buttons to display the answers in a random order
  shuffle(finalList) {
    // FLAG : both conditions must be true, then do:
    const orderedFinalList = [];

    if (this.props.answerClicked && this.state.orderList.length > 0) {
      orderedFinalList[0] = finalList.filter(button => {
        return button.key == this.state.orderList[0];
      });
      orderedFinalList[1] = finalList.filter(button => {
        return button.key == this.state.orderList[1];
      });
      orderedFinalList[2] = finalList.filter(button => {
        return button.key == this.state.orderList[2];
      });
      orderedFinalList[3] = finalList.filter(button => {
        return button.key == this.state.orderList[3];
      });
      console.log('orderedFinalist', orderedFinalList[1]);

      return orderedFinalList;
    }
    // else at least one condition is false, then do:

    //shuffle business logic
    for (let i = finalList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [finalList[i], finalList[j]] = [finalList[j], finalList[i]];
    }

    // update the orderList with value.keys from the button
    this.updatedOrderList = finalList.map(button => {
      console.log('button key', button.key);
      return button.key;
    });
    console.log('updateed orders list', this.updatedOrderList);

    // this.setState({ orderList: updatedOrderList });
    // console.log('orderList', this.state.orderList);
    return finalList;
  }
  // update setState only when clicking the button
  handlerOnClick(arrList) {
    this.setState({ orderList: arrList });
    console.log('setState', arrList);
  }

  render() {
    console.log('render...');
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
            this.handlerOnClick(this.updatedOrderList);
          }}>
          {htmlDecode(answersList[i])}
        </button>
      );
    }

    return (
      <div className="flexQuiz">
        <h2> Quiz time </h2>
        <span>
          <b>
            Score: {this.props.score}/{this.props.amount * 10}
          </b>
        </span>
        <h3>{htmlDecode(this.props.currentQuiz.question)}</h3>
        <section className="flexQuiz">
          {/* this function will return either finalList or orderedFinalList depending of the condition */}
          {this.shuffle(finalList)}
        </section>
        <div>
          <p>
            <i>
              Question {this.props.currentQuizNo + 1} on {this.props.amount}
            </i>
          </p>
          {/* The onClick event works only inside a HTML tag not inside a component ex: "MyButton"
            If the onClick event is written as an arrow function then there is no need to bind it */}
          <button className="orange" onClick={this.props.nextQuizOnClick}>
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

export default DisplayQuestion;
