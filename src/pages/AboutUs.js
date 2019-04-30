import React from "react";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar2 />
      <h1>Our Team</h1>
      <section>
        <div>
          <img />
          <p>Raphael</p>
        </div>
        <div>
          <img />
          <p>Laura</p>
        </div>
        <div>
          <img />
          <p>Camille</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
