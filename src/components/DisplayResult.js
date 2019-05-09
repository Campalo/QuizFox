import React from "react";

const DisplayResult = ({ correctAnswer }) => {
  let congrats = "";
  if (correctAnswer <= 5) {
    congrats = "Almost there, try again to improve your Skill!💡";
  } else if (correctAnswer <= 8) {
    congrats = "Nice try, almost perfect!🤓";
  } else if (correctAnswer <= 10) {
    congrats = "Amazing, smart Fox!🦊";
  } else {
    congrats = "Something went wrong little Hacker 😉";
  }
  return (
    <div>
      <h5>{congrats}</h5>
    </div>
  );
  //TO DO : "Your score is {score} on {amount}"
};

export default DisplayResult;
