import React from "react";

const DisplayQuestion = ({ showQuestionAnswers }) => {
  return (
    <div>
      <h5>{showQuestionAnswers.question}</h5>
      <p>{showQuestionAnswers.correct_answer}</p>
      <p>{showQuestionAnswers.incorrect_answers}</p>
    </div>
  );
};

export default DisplayQuestion;
