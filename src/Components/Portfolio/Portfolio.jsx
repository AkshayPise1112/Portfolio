import React from 'react';
import './Portfolio.css';
import BMI from '../../assets/BMI.jpeg';
import Calculator from '../../assets/Calculator.jpeg';
import GuessNumber from '../../assets/GuessNumber.png';
import PigGame from '../../assets/PigGame.png';
import TempConv from '../../assets/TempConv.png';
import Profile from '../../assets/Portfolio.png';
import Catalogue from '../../assets/catalogue.png';

const Portfolio = ({ innerRef }) => {
	return (
		<section id="Portfolio">
			<h5>My Recent Work</h5>
			<h2>PortFolio</h2>

			<div className="container portfolio_container">
				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={Catalogue} alt="Portfolio" />
					</div>
					<h3>Catalogue</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/AkshayPise1112/Catalogue"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						{/* <a
							href="www.github.com"
							target="_blank"
							className="btn btn-Primary"
						>
							Live Demo
						</a> */}
					</div>
				</article>
				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={Profile} alt="Portfolio" />
					</div>
					<h3>Portfolio Website</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/AkshayPise1112/Portfolio/tree/main"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						<a href="#" className="btn btn-Primary">
							Live Demo
						</a>
					</div>
				</article>
				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={PigGame} alt="Portfolio" />
					</div>
					<h3>Pig Game</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/AkshayPise1112/the-pig-game"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						<a
							href="https://thepiggameio.vercel.app/"
							target="_blank"
							className="btn btn-Primary"
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={GuessNumber} alt="Portfolio" />
					</div>
					<h3>Guess My Number</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/AkshayPise1112/Guess-My-Number"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						<a
							href="https://guessmynumberio.vercel.app/"
							target="_blank"
							className="btn btn-Primary"
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={TempConv} alt="Portfolio" />
					</div>
					<h3>Temperature Converter</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/AkshayPise1112/Web-Development/tree/main/Internship%20project/Temperature%20Converter"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						<a
							href="https://temperatureconverterio.vercel.app/"
							target="_blank"
							className="btn btn-Primary"
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={Calculator} alt="Portfolio" />
					</div>
					<h3>Calculator</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/AkshayPise1112/Calculator/tree/master"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						{/* <a
							href="www.github.com"
							target="_blank"
							className="btn btn-Primary"
						>
							Live Demo
						</a> */}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Portfolio;
