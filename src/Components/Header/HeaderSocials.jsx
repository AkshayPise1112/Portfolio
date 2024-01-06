import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa6';

const HeaderSocials = () => {
	return (
		<div className="header_social">
			<a
				href="https://www.linkedin.com/in/akshay-pise-b25592242/"
				target="_blank"
				className="links"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/AkshayPise1112"
				target="_blank"
				className="links"
			>
				<BsGithub />
			</a>
			<a
				href="https://www.instagram.com/akshay_19.01/"
				target="_blank"
				className="links"
			>
				<FaInstagram />
			</a>
		</div>
	);
};

export default HeaderSocials;
