import React from 'react';

const DisplayResult = ({ score, amount }) => {
  let congrats = '';
  if (score <= 50) {
    congrats = 'Almost there, try again to improve your Skill!💡';
  } else if (score <= 80) {
    congrats = 'Nice try, almost perfect!🤓';
  } else if (score <= 100) {
    congrats = 'Amazing, smart Fox!🦊';
  } else {
    congrats = 'Something went wrong little Hacker 😉';
  }
  return (
    <div>
      <h2>
        {score} points of {amount * 100}
      </h2>
      <h3>{congrats}</h3>
    </div>
  );
};

export default DisplayResult;
