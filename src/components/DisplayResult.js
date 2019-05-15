import React from "react";

const DisplayResult = ({ score, amount }) => {
  let congrats = "";
  let gif = "";
  if (score <= 30) {
    congrats = "Almost there, try again to improve your Skill!💡";
    gif = "https://media.giphy.com/media/6AISOi3lxZcTS/giphy.gif";
  } else if (score <= 80) {
    congrats = "Nice try, almost perfect!🤓";
    gif = "https://media.giphy.com/media/qkdTy6tTmF7Xy/giphy.gif";
  } else if (score <= 100) {
    congrats = "Amazing, smart Fox!🦊";
    gif = "https://media.giphy.com/media/13Xy3MWV2Psz4I/giphy.gif";
  } else {
    congrats = "Something went wrong little Hacker 😉";
  }
  return (
    <div className="flexAnswers">
      <h2>
        {score} points of {amount * 10}
      </h2>
      <h3>{congrats}</h3>
      <img src={gif} />
    </div>
  );
};

export default DisplayResult;
