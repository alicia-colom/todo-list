import '../stylesheets/Footer.scss';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<small className="footer__copyright">
					Made with
					<i
						className="fa fa-heart"
						title="...love &amp; effort..."
						aria-hidden="true"
					></i>
					by{' '}
					<span className="footer__copyright--author" title="Nice to meet you!">
						Alicia Colom
					</span>
				</small>
				<nav>
					<a
						className="link"
						href="https://twitter.com/aliciacolom"
						target="_blank"
						rel="noreferrer"
						title="Follow me on Twitter"
					>
						<i className="fa fa-twitter-square" aria-hidden="true"></i>
					</a>
					<a
						className="link"
						href="https://www.linkedin.com/in/aliciacolomortega/"
						target="_blank"
						rel="noreferrer"
						title="Let's connect on LinkedIn"
					>
						<i className="fa fa-linkedin-square" aria-hidden="true"></i>
					</a>
					<a
						className="link"
						href="https://github.com/alicia-colom/"
						target="_blank"
						rel="noreferrer"
						title="Have a look to my GitHub"
					>
						<i className="fa fa-github-square" aria-hidden="true"></i>
					</a>
					<a
						className="link"
						href="mailto:aliciacolom@gmail.com"
						target="_blank"
						rel="noreferrer"
						title="Contact me!"
					>
						<i className="fa fa-envelope-square" aria-hidden="true"></i>
					</a>
				</nav>
			</footer>
		</>
	);
};

export default Footer;
