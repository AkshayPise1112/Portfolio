import React from 'react';
import highSchool from '../../assets/Shri vridheshwar high school.jpg';
import './Education.css';
import juniorCollege from '../../assets/shri vridheshwar junior college.jpg';
import BCS from '../../assets/dr. d. y. patil ACS college pimpri.jpeg';
import modern from '../../assets/modern college.jpg';

function Education() {
	return (
		<div className="schoolSlider">
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={highSchool}
					alt="Shri Vridheshwar High School, Tisgaon"
				/>
				<div className="schoolName">
					<p>
						Shri Vridheshwar High School,
						<br /> Tisgaon
					</p>
					<p>2019</p>
				</div>
				<p>X</p>
				<p>83.40%</p>
			</div>
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={juniorCollege}
					alt="Shri Vridheshwar Junior College, Tisgaon"
				/>
				<div className="schoolName">
					<p>
						Shri Vridheshwar Junior College,
						<br /> Tisgaon
					</p>
					<p>2021</p>
				</div>
				<p>XII</p>
				<p>83.67%</p>
			</div>
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={BCS}
					alt="Dr. D. Y. Patil Arts, Commerce and Science college, pimpri"
				/>
				<div className="schoolName">
					<p>
						Dr. D. Y. Patil ACS College, <br />
						pimpri
					</p>
					<p>2024</p>
				</div>
				<p>BSc(Computer Science)</p>
				<p>8.55 CGPA</p>
			</div>
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={modern}
					alt="PES Modern College of Engineering, Pune"
				/>
				<div className="schoolName">
					<p>
						Modern College of Engineering, <br />
						Pune
					</p>
					<p>2026</p>
				</div>
				<p>MCA</p>
				<p>NA</p>
			</div>
		</div>
	);
}

export default Education;
