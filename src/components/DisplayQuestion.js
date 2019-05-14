import React from 'react';
import htmlDecode from './Utility';

const DisplayQuestion = ({
  currentQuiz,
  currentQuizNo,
  amount,
  nextQuizOnClick,
  scoreUpdateOnClick,
  score,
  incorrectButton,
  correctButton,
  colorUpdateOnClick
}) => {
  let finalList = [];

  // create an array called answersList and concat the 4 answers inside
  let answersList = [].concat(currentQuiz.correct_answer).concat(currentQuiz.incorrect_answers);
  console.log('correct answer is:', currentQuiz.correct_answer);

  // push each item from answersList inside a button inside an array called finalList
  for (let i = 0; i < answersList.length; i++) {
    finalList.push(
      <button
        key={i}
        className={i === 0 ? correctButton : incorrectButton}
        onClick={e => {
          scoreUpdateOnClick(e, i);
          colorUpdateOnClick();
        }}>
        {htmlDecode(answersList[i])}
      </button>
    );
  }
  console.log('shuffle time:', finalList);

  //shuffle the buttons to display the answers in a random order
  function shuffle(finalList) {
    for (let i = finalList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [finalList[i], finalList[j]] = [finalList[j], finalList[i]];
    }
    console.log('shuffle time 2:', finalList);
    return finalList;
  }
  console.log('shuffle time 3:', finalList);

  return (
    <div>
      <h2> Quiz time </h2>
      <h3>{htmlDecode(currentQuiz.question)}</h3>
      <div className="flexQuizBtn">
        <section>{shuffle(finalList)}</section>
        {/* The onClick event works only inside a HTML tag not inside a component ex: "MyButton"
          If the onClick event is written as an arrow function then there is no need to bind it */}
        <button onClick={nextQuizOnClick}>Next Question</button>
        <p>
          Question {currentQuizNo + 1} on {amount}
        </p>
        <p>Score: {score}/100</p>
      </div>
    </div>
  );
};

export default DisplayQuestion;
