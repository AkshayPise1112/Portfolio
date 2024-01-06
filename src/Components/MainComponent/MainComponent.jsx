import React, { useRef } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

function MainComponent({ setActiveClass }) {
	document.addEventListener('scroll', () => {
		// console.log(window.scrollY);
		// console.log(window.innerWidth);
		if (window.innerWidth > 1024) {
			if (window.scrollY < 700) setActiveClass('#');
			if (window.scrollY >= 700) setActiveClass('#About');
			if (window.scrollY >= 1300) setActiveClass('#Experience');
			if (window.scrollY >= 2400) setActiveClass('#Portfolio');
			if (window.scrollY >= 3400) setActiveClass('#Contact');
		}

		if (window.innerWidth <= 1024 && window.innerWidth > 600) {
			if (window.scrollY < 1100) setActiveClass('#');
			if (window.scrollY >= 1100) setActiveClass('#About');
			if (window.scrollY >= 2200) setActiveClass('#Experience');
			if (window.scrollY >= 3700) setActiveClass('#Portfolio');
			if (window.scrollY >= 5200) setActiveClass('#Contact');
		}

		if (window.innerWidth < 600) {
			if (window.scrollY < 1100) setActiveClass('#');
			if (window.scrollY >= 1100) setActiveClass('#About');
			if (window.scrollY >= 2400) setActiveClass('#Experience');
			if (window.scrollY >= 4600) setActiveClass('#Portfolio');
			if (window.scrollY >= 7300) setActiveClass('#Contact');
		}
	});

	return (
		<>
			<Header />
			<About />
			<Experience />
			{/* <Services innerRef={ref4}/> */}
			<Portfolio />
			{/* <Testimonials innerRef={ref6}/> */}
			<Contact />
		</>
	);
}

export default MainComponent;
