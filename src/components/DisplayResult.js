import React from 'react';

const DisplayResult = ({ score, amount }) => {
  let congrats = '';
  if (score <= 5) {
    congrats = 'Almost there, try again to improve your Skill!💡';
  } else if (score <= 8) {
    congrats = 'Nice try, almost perfect!🤓';
  } else if (score <= 10) {
    congrats = 'Amazing, smart Fox!🦊';
  } else {
    congrats = 'Something went wrong little Hacker 😉';
  }
  return (
    <div>
      <h2>
        {score} points on {amount}
      </h2>
      <h3>{congrats}</h3>
    </div>
  );
};

export default DisplayResult;
