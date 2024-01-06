import React, { useState } from 'react';
import './Contact.css';
import ContactHandles from './ContactHandles';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ImCross } from 'react-icons/im';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_yr8dwci',
				'template_y2p0d6g',
				form.current,
				'ifMJtFPf6CZ57F_lM'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id="Contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact_container">
				<ContactHandles />
				<form ref={form} className="contact_form" onSubmit={sendEmail}>
					<h3>Send Me Message..</h3>
					<div className="input_fields">
						<input
							type="text"
							className="inputs"
							placeholder="Full Name"
							name="name"
						/>
						<input
							type="email"
							className="inputs"
							placeholder="Email"
							name="email"
						/>
						<input
							type="text"
							className="inputs"
							placeholder="Subject"
							name="subject"
						/>
						<div className="main_message">
							<p>Tell Me About Subject..</p>
							<textarea
								className="inputs input_textarea"
								rows={4}
								name="message"
							/>
						</div>
						<div className="submit_btn">
							<button type="submit" className="btn btn-Primary">
								Send Message
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
