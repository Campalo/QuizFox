import React from "react";
import "../../App.css";

function Footer(props) {
  return (
    <header className="Footer">
      {/* background image in css file */}
      <h4 className="Footer-H4">&copy;Quiz Fox 2019 by:</h4>
      <p>
        Laura Sochaczewski
        <a href="https://github.com/laura-mso">
          Github<span class="heart">❤</span>
        </a>
        <a href="https://www.linkedin.com/in/laura-sochaczewski-70863b121/">LinkedIn</a>
      </p>
      <p>
        Camille Charteau
        <a href="https://github.com/Campalo">
          Github<span class="heart">❤</span>
        </a>
        <a href="https://www.linkedin.com/in/camille-charteau/">LinkedIn</a>
      </p>
      <p>
        Raphael Lautenbacher
        <a href="https://github.com/Datingel">
          Github<span class="heart">❤</span>
        </a>
        <a href="https://www.linkedin.com/in/raphael-lautenbacher-4940a6171/">LinkedIn</a>
      </p>
    </header>
  );
}

export default Footer;
