import React, { Component } from 'react';
import DisplayQuestion from '../components/DisplayQuestion';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer from '../components/globalComponents/Footer';
import DisplayResult from '../components/DisplayResult';

class Quiz extends Component {
	constructor(props) {
		super(props);
		// match: get the category and difficulty parameters from the quiz url
		// this url is defined when the user choose a difficulty level on a CategoryCard
		const { category, difficulty } = props.match.params;
		// setState: set the initial values of the State, here it is empty
		this.state = {
			category,
			difficulty,
			amount: 10,
			type: 'multiple',
			quizQuestion: {},
			currentQuestion: 1,
			correctAnswerCounter: 0,
		};
	}

	componentDidMount() {
		//getQuestion(this.state.category, this.state.difficulty) {
		const url = `https://opentdb.com/api.php?amount=${this.state.amount}&category=${
			this.state.category
		}&difficulty=${this.state.difficulty}&type=${this.state.type}`;
		//fetch: make a request to the server to get the info we are looking for based on the Query Parameters we defined
		fetch(url)
			// then: receive the info (response) and transform it into json format
			.then(response => response.json())
			// then: return only the array with the info we want (questions and answers)
			.then(json => json.results)
			// then: receive the 10 questions and related answers and pass only the first question to the state
			// the Quiz component "re-render" the quizQuestion's value
			.then(result =>
				this.setState({
					quizQuestion: result[0],
				})
			);
		//}
	}

	render() {
		return (
			<div>
				<Navbar2 />
				<main className="mainSize">
					<h1>QA</h1>
					<DisplayQuestion
						showQuestion={this.state.quizQuestion}
						currentQuestion={this.state.currentQuestion}
						amount={this.state.amount}
					/>
					<DisplayResult showQuestion={this.state.quizQuestion.correctAnswer} amount={this.state.amount} />
				</main>
				<Footer />
			</div>
		);
	}
}
export default Quiz;
