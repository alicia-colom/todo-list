import '../stylesheets/Footer.scss';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<p className="footer__credits">
					Made with
					<i
						className="fa fa-heart"
						title="...love &amp; effort..."
						aria-hidden="true"
					></i>
					by{' '}
					<span className="footer__credits--author" title="Nice to meet you!">
						Alicia Colom
					</span>
				</p>
				<nav>
					<a
						className="footer__link"
						href="https://twitter.com/aliciacolom"
						target="_blank"
						rel="noreferrer"
						title="Follow me on Twitter"
					>
						<i className="fa fa-twitter-square ssmm-size" aria-hidden="true"></i>
					</a>
					<a
						className="footer__link"
						href="https://www.linkedin.com/in/aliciacolomortega/"
						target="_blank"
						rel="noreferrer"
						title="Let's connect on LinkedIn"
					>
						<i className="fa fa-linkedin-square ssmm-size" aria-hidden="true"></i>
					</a>
					<a
						className="footer__link"
						href="https://github.com/alicia-colom/"
						target="_blank"
						rel="noreferrer"
						title="Have a look to my GitHub"
					>
						<i className="fa fa-github-square ssmm-size" aria-hidden="true"></i>
					</a>
					<a
						className="footer__link"
						href="mailto:aliciacolom@gmail.com"
						target="_blank"
						rel="noreferrer"
						title="Contact me!"
					>
						<i className="fa fa-envelope-square ssmm-size" aria-hidden="true"></i>
					</a>
				</nav>
				<small className="footer__copyright">
					<a
						href="https://www.freepik.com/vectors/background"
						className="footer__copyright--link"
					>
						Background vector created by starline - www.freepik.com
					</a>
				</small>
			</footer>
		</>
	);
};

export default Footer;
