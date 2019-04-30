import React, { Component } from "react";
import Header from "./components/Header";
import CategoryCard from "./components/Category";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="categoryCards">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </section>
      </div>
    );
  }
}

export default Home;
