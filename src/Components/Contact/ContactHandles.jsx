import React from 'react';

import { MdMail } from 'react-icons/md';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';

const ContactHandles = () => {
	return (
		<div className="contact_handles">
			<h3>Let's Chat..</h3>
			<p>Let's Create Something Together...</p>

			<div className="contact_cards">
				<div className="contact_card mail">
					<div className="icon">
						<MdMail />
					</div>
					<div className="contact_details">
						<h4>Mail me at..</h4>
						<a href="mailto:akshaypise1112@gmail.com" target="_blank">
							akshaypise1112@gmail.com
						</a>
					</div>
				</div>
				<div className="contact_card mail">
					<div className="icon">
						<BsLinkedin />
					</div>
					<div className="contact_details">
						<h4>DM me at..</h4>
						<a
							href="https://www.linkedin.com/in/akshay-pise-b25592242/"
							target="_blank"
						>
							Linkedin
						</a>
					</div>
				</div>
				<div className="contact_card mail">
					<div className="icon">
						<FaSquareWhatsapp />
					</div>
					<div className="contact_details">
						<h4>Send Whatsapp Message at..</h4>
						<a href="https://wa.me/9834532967" target="blank">
							+91 9834532967
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactHandles;
