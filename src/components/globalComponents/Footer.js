import React from 'react';
import '../../App.css';

function Footer(props) {
	return (
		<footer className="MyFooter">
			<p className="MyFooterQuizFox">&copy;Quiz Fox 2019 by:</p>
			<p className="MyFooterLaura">
				Laura Sochaczewski
				<a href="https://github.com/laura-mso " className="decorationNone">
					Github<span className="heart"> ❤ </span>
				</a>
				<a
					href=" https://www.linkedin.com/in/laura-sochaczewski-70863b121/"
					className="decorationNone">
					LinkedIn
				</a>
			</p>
			<p className="MyFooterCamille">
				Camille Charteau
				<a href="https://github.com/Campalo " className="decorationNone">
					Github<span className="heart"> ❤ </span>
				</a>
				<a href=" https://www.linkedin.com/in/camille-charteau/ " className="decorationNone">
					LinkedIn
				</a>
			</p>
			<p className="MyFooterRaphael">
				Raphael Lautenbacher
				<a href="https://github.com/Datingel " className="decorationNone">
					Github<span className="heart"> ❤ </span>
				</a>
				<a
					href=" https://www.linkedin.com/in/raphael-lautenbacher-4940a6171/"
					className="decorationNone">
					LinkedIn
				</a>
			</p>
		</footer>
	);
}

export default Footer;
