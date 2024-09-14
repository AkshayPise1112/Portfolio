import React, { useRef } from 'react';
import Header from '../Header/Header.jsx';
import About from '../About/About.jsx';
import Experience from '../Experience/Experience.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Contact from '../Contact/Contact.jsx';

function MainComponent({ setActiveClass }) {
	const homeRef = useRef('');
	const aboutRef = useRef('');
	const experienceRef = useRef('');
	const portfolioRef = useRef('');
	const contactRef = useRef('');

	document.addEventListener('scroll', () => {
		// console.log(window.scrollY);

		if (window.innerWidth > 1024) {
			if (window.scrollY < 700) setActiveClass('#');
			if (window.scrollY >= 700) setActiveClass('#About');
			if (window.scrollY >= 1900) setActiveClass('#Experience');
			if (window.scrollY >= 3100) setActiveClass('#Portfolio');
			if (window.scrollY >= 4000) setActiveClass('#Contact');
		}

		if (window.innerWidth <= 1024 && window.innerWidth > 600) {
			if (window.scrollY < 1100) setActiveClass('#');
			if (window.scrollY >= 1100) setActiveClass('#About');
			if (window.scrollY >= 2900) setActiveClass('#Experience');
			if (window.scrollY >= 4600) setActiveClass('#Portfolio');
			if (window.scrollY >= 5800) setActiveClass('#Contact');
		}

		if (window.innerWidth < 600) {
			if (window.scrollY < 1100) setActiveClass('#');
			if (window.scrollY >= 1100) setActiveClass('#About');
			if (window.scrollY >= 3900) setActiveClass('#Experience');
			if (window.scrollY >= 6200) setActiveClass('#Portfolio');
			if (window.scrollY >= 9100) setActiveClass('#Contact');
		}

		// if (
		// 	window.scrollY >= homeRef.current.offsetTop &&
		// 	window.scrollY < aboutRef.current.offsetTop
		// )
		// 	setActiveClass('#');
		// if (
		// 	window.scrollY >= aboutRef.current.offsetTop &&
		// 	window.scrollY < experienceRef.current.offsetTop
		// )
		// 	setActiveClass('#about');
		// if (
		// 	window.scrollY >= experienceRef.current.offsetTop &&
		// 	window.scrollY < portfolioRef.current.offsetTop
		// )
		// 	setActiveClass('#experience');

		// if (window.scrollY >= contactRef.current.offsetTop)
		// 	setActiveClass('#contact');
	});

	return (
		<>
			<Header innerRef={homeRef} />
			<About innerRef={aboutRef} />
			<Experience innerRef={experienceRef} />
			{/* <Services innerRef={ref4}/> */}
			<Portfolio innerRef={portfolioRef} />
			{/* <Testimonials innerRef={ref6}/> */}
			<Contact innerRef={contactRef} />
		</>
	);
}

export default MainComponent;
