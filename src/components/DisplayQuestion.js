import React from 'react';

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
  const answersList = [].concat(currentQuiz.correct_answer).concat(currentQuiz.incorrect_answers);
  console.log('answerList[0] is :', answersList[0]);
  console.log('correct answer is:', currentQuiz.correct_answer);

  // push each item from answersList inside a button inside an array called finalList
  for (let i = 0; i < answersList.length; i++) {
    console.log('This is color of the Button: ', incorrectButton, correctButton);
    const buttonColor = i === 0 ? correctButton : incorrectButton;
    finalList.push(
      <button
        key={i}
        className={buttonColor}
        onClick={e => {
          scoreUpdateOnClick(e, i);
          colorUpdateOnClick();
        }}>
        {answersList[i]}
      </button>
    );
    console.log('finalList array: ', finalList);
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
      <h2> Quiz time </h2>
      <h3>{currentQuiz.question}</h3>
      <section>{shuffle(finalList)}</section>
      <p>
        Question {currentQuizNo + 1} on {amount}
      </p>
      <p>
        Score: {score}/{amount}
      </p>
      {/* The onClick event works only inside a HTML tag not inside a component ex: "MyButton"
      If the onClick event is written as an arrow function then there is no need to bind it */}
      <button onClick={nextQuizOnClick}>Next Question</button>
    </div>
  );
};

export default DisplayQuestion;
