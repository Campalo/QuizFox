import React, { Component } from "react";
import CategoryCard from "../components/CategoryCards";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>Eager to play?</h1>
          <h3>Choose one category and its level of difficulty to access the questions</h3>
          <section id="categoryCards">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
