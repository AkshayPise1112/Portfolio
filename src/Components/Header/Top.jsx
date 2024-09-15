import React from 'react';
import Symbol from '../../assets/logo.png';
import Resume from '../../assets/akshayResume.pdf';

const Top = () => {
	return (
		<div className="top">
			<div className="symbol">
				<img src={Symbol} alt="A" className="logo" />
				<h1 className="logoName">kshay Pise</h1>
			</div>
			<a href={Resume} download={Resume.pdf} target="blank" className="btn">
				Download CV
			</a>
		</div>
	);
};

export default Top;
