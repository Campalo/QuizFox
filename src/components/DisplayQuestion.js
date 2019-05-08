import React from 'react';
import MyButton from './Button';

const DisplayQuestion = ({ showQuestion, currentQuestion, amount }) => {
	let finalList = [];

	const answersList = [].concat(showQuestion.correct_answer).concat(showQuestion.incorrect_answers);
	console.log('our array:', answersList);

	for (let i = 0; i < answersList.length; i++) {
		finalList.push(<MyButton>{answersList[i]}</MyButton>);
		console.log(finalList);
	}

	function shuffle(finalList) {
		for (let i = finalList.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[finalList[i], finalList[j]] = [finalList[j], finalList[i]];
		}
		return finalList;
	}

	return (
		<div>
			<h5>{showQuestion.question}</h5>
			<p>{showQuestion.correct_answer}</p>
			{/* <p>{showQuestion.incorrect_answers}</p> */}
			<p>
				You are on Question {currentQuestion} on {amount}
			</p>
			<p>{shuffle(finalList)}</p>
		</div>
	);
};

export default DisplayQuestion;
