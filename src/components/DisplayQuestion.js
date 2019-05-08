import React from "react";
import MyButton from "./Button";

const DisplayQuestion = ({ quizQuestion, currentQuestion, amount }) => {
  let finalList = [];

  // create an array called answersList and concat the 4 answers inside
  const answersList = [].concat(quizQuestion.correct_answer).concat(quizQuestion.incorrect_answers);
  console.log("our array:", answersList);

  // push each item from answersList inside a button inside an array called finalList
  for (let i = 0; i < answersList.length; i++) {
    finalList.push(<MyButton>{answersList[i]}</MyButton>);
    console.log(finalList);
  }

  //shuffle the buttons to display the answers in a random order
  function shuffle(finalList) {
    for (let i = finalList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [finalList[i], finalList[j]] = [finalList[j], finalList[i]];
    }
    return finalList;
  }

  return (
    <div>
      <h5>{quizQuestion.question}</h5>
      <section>{shuffle(finalList)}</section>
      <p>
        You are on Question {currentQuestion} on {amount}
      </p>
    </div>
  );
};

export default DisplayQuestion;
