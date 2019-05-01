import React, { Component } from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

class Quiz extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>QA</h1>
          <Question />
          <section>
            <Answer />
            <Answer />
            <Answer />
            <Answer />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Quiz;
