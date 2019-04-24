import React, { Component } from "react";

const renderHTML = (rawHTML: string) =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: rawHTML }
  });

const QuestionsAPI = ({ question }) => {
  return (
    <div>
      <h5>{renderHTML(question.question)}</h5>
      <p>{renderHTML(question.correct_answer)}</p>
      <p>{renderHTML(question.incorrect_answers)}</p>
    </div>
  );
};

export default QuestionsAPI;
