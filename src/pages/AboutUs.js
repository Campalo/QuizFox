import React from "react";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar2 />
      <main className="mainSize">
        <h1>Our Team</h1>
        <section>
          <div>
            <p>Raphael</p>
          </div>
          <div>
            <p>Laura</p>
          </div>
          <div>
            <p>Camille</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
