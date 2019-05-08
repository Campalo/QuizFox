import React from "react";

const DisplayQuestion = ({ showQuestion, currentQuestion, amount }) => {
  return (
    <div>
      <h5>{showQuestion.question}</h5>
      <p>{showQuestion.correct_answer}</p>
      <p>{showQuestion.incorrect_answers}</p>
      <p>
        You are on Question {currentQuestion} on {amount}
      </p>
    </div>
  );
};

export default DisplayQuestion;

// TO DO :

// const Answers = ({ correct_answer, incorrect_answers }) => {
//   let list = [];

//   const answerList = [].concat(correct_answer).concat(incorrect_answers);
//   console.log("our array:", answerList);
//   for (let i = 0; i <= answerList.length; i++) {
//     list.push(answerList[i]);
//   }

//   // shuffle() => {}

//   return (
//     <div>
//       {" "}
//       Array : {list}
//       {/* {shuffle(list)} */}
//     </div>
//   );
// };
