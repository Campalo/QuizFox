import React from "react";

const DisplayQuestion = ({ showQuestion }) => {
  return (
    <div>
      <h5>{showQuestion.question}</h5>
      <p>{showQuestion.correct_answer}</p>
      <p>{showQuestion.incorrect_answers}</p>
    </div>
  );
};

export default DisplayQuestion;
