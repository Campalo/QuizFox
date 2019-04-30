import React, { Component } from "react";
import ResultCard from "../components/ResultCard";
import MyButton from "../components/Button";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

class Result extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <ResultCard />
        <section>
          <MyButton>Play again</MyButton>
          <MyButton>Choose new category or difficulty level</MyButton>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ResultCard;
