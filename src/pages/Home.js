import React, { Component } from "react";
import Header from "../components/Header";
import CategoryCard from "../components/Category";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <Header />
        <section id="categoryCards">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
