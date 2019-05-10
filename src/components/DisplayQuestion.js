import React from 'react';
//import MyButton from './Button';

const DisplayQuestion = ({
  listQuestions,
  currentQuestionNo,
  currentQuestion,
  amount,
  incrementOnClick,
  scoreUpdateOnClick,
  score
}) => {
  let finalList = [];

  // create an array called answersList and concat the 4 answers inside
  const answersList = []
    .concat(currentQuestion.correct_answer)
    .concat(currentQuestion.incorrect_answers);
  console.log('answer list:', answersList[0]);
  console.log('correct answer:', currentQuestion.correct_answer);

  // push each item from answersList inside a button inside an array called finalList
  for (let i = 0; i < answersList.length; i++) {
    finalList.push(
      <button style={{ backgroundColor: 'yellow' }} key={i} onClick={e => scoreUpdateOnClick(e, i)}>
        {answersList[i]}
      </button>
    );
    console.log(finalList);
    console.log('This is our key object:', Object.keys(finalList));
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
      <h5>{currentQuestion.question}</h5>
      <section>{shuffle(finalList)}</section>
      <p>
        You are on Question {currentQuestionNo} on {amount}
      </p>
      <p>
        Score: {score}/{amount}
      </p>
      {/* The onClick event works only inside a HTML tag not inside a component ex: "MyButton"
      If the onClick event is written as an arrow function then there is no need to bind it */}
      <button
        onClick={incrementOnClick}
        //onClick={nextQuestionOnClick}
      >
        Next Question
      </button>
    </div>
  );
};

export default DisplayQuestion;
