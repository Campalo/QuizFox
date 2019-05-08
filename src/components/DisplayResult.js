import React from 'react';

const displayResult = (correctAnswer, amount) => {
	let congrates = '';
	if (this.state.correctAnswer <= 5) {
		return (congrats = 'Almost there, try again to improve your Skill!💡');
	} else if (this.state.correctAnswer <= 8) {
		return (congrats = 'Nice try, almost perfect!🤓');
	} else if (this.state.correctAnswer <= 10) {
		return (congrats = 'Amazing, smart Fox!🦊');
	} else {
		return (congrats = 'Somehting went wrong little Hacker 😉');
	}
};

return <div>{congrats}</div>;

export default displayResult;
