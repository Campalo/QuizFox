import React from 'react';

const DisplayResult = showQuestion => {
	let congrats = '';
	if (showQuestion.correctAnswer <= 5) {
		congrats = 'Almost there, try again to improve your Skill!💡';
	} else if (showQuestion.correctAnswer <= 8) {
		congrats = 'Nice try, almost perfect!🤓';
	} else if (showQuestion.correctAnswer <= 10) {
		congrats = 'Amazing, smart Fox!🦊';
	} else {
		congrats = 'Something went wrong little Hacker 😉';
	}
	return <div>{congrats}</div>;
};

export default DisplayResult;
