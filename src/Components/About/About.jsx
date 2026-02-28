import React from 'react';
import './About.css';
import Profile from './../../assets/profile.png';
import { FaAward } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
import { MdFolderShared } from 'react-icons/md';
import Education from './Education';

const About = ({ innerRef }) => {
	return (
		<section id="About">
			<h5>Get to Know</h5>
			<h2>About</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img src={Profile} alt="About Me" />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<article className="about_card">
							<FaAward className="about_icon" />
							<h4 className="fields">Experience</h4>
							<small>Fresher</small>
						</article>
						<article className="about_card">
							<FaUsers className="about_icon" />
							<h4 className="fields">Clients</h4>
							<small>0 Clients</small>
						</article>
						<article className="about_card">
							<MdFolderShared className="about_icon" />
							<h4 className="fields">Projects</h4>
							<small>10+ Completed</small>
						</article>
					</div>

					<p className="intro">
						My Name is Akshay Pise. I just completed Bsc(Computer Science) in
						Dr. D. Y. Patil Arts, Commerce and Science College, Pimpri. <br />I
						am Software Developer. I Like to Learn by Trial and Error Method by
						Myself. <br />I am Quick Learner and Love to Learn new Thing and
						Technologies, also I Love to Code.
					</p>

					<a href="#Contact" className="btn btn-Primary">
						Let's Talk
					</a>
				</div>
			</div>

			{/* <Education /> */}
		</section>
	);
};

export default About;
