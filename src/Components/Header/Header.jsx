import React, { useRef } from 'react';
import './Header.css';
import Profile from '../../assets/profile2b.png';
import HeaderSocial from './HeaderSocials';
import Top from './Top';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Header = () => {
	const [TextWords] = useTypewriter({
		words: ['WEB DEVELOPER', 'COMPETITIVE PROGRAMMER', 'ANDROID DEVELOPER'],
		loop: {},
		typeSpeed: 150,
	});
	return (
		<header id="#">
			<div className="container header_container">
				<Top />
				<div className="headerMain">
					<div className="header_text">
						<h5>Hello I'm</h5>
						<h1>Akshay Pise</h1>
						<div className="text-light">
							<h4>
								<span>{TextWords}</span>
								<span className="cursor">
									<Cursor />
								</span>
							</h4>
						</div>

						<a href="#Contact" className="btn btn-Primary">
							Talk to Me
						</a>
						<HeaderSocial />
						<h3 className="instruction">Scroll Down</h3>
					</div>
					<div className="me">
						<img src={Profile} alt="Akshay" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
