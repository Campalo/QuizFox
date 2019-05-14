import React from 'react';

export default function NextQScore({ currentQuizNo, amount, nextQuizOnClick, score }) {
  return (
    <div>
      {/* The onClick event works only inside a HTML tag not inside a component ex: "MyButton"
        If the onClick event is written as an arrow function then there is no need to bind it */}
      <button className="orange" onClick={nextQuizOnClick}>
        Next Question
      </button>
      <p>
        Question {currentQuizNo + 1} on {amount}
      </p>
      <p>Score: {score}/100</p>
    </div>
  );
}
