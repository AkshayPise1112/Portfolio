import React from 'react';
import './Experience.css';
import Backend from './Backend';
import Frontend from './Frontend';
import Skills from '../Skills/Skills';

const Experience = ({ innerRef }) => {
	return (
		<section id="Experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<Skills />
			{/* <div className="container experience_container">
				<Frontend />
				<Backend />
			</div> */}
		</section>
	);
};

export default Experience;
