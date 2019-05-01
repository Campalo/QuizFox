import React, { Component } from "react";
import CategoryCard from "../components/CategoryCards";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
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
