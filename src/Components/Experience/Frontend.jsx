import React, { useRef, useEffect } from 'react';
import { TbDiscountCheckFilled } from 'react-icons/tb';
import './Frontend.css';

const now = new Date();
const currentMonth = now.toLocaleString('default', { month: 'short' }); // "Mar"
const currentYear = now.getFullYear(); // 2026


const timelineData = [
	{
		type: "experience",
		side: "left",
		degree: "Fullstack Developer Intern",
		institution: "DigitalEDU Pvt. Ltd.",
		period: `Dec 2025 – ${currentMonth} ${currentYear}`,
		description: "Built scalable api's as well as migrate backend from php7.5 to php8.5",
		icon: "💼",
	},
	{
		type: "education",
		side: "right",
		degree: "MCA",
		institution: "Modern College of Engineering, pune",
		period: "2024 – 2026",
		description: "Focused on Data Structures, Algorithms, and Full Stack Development.",
		icon: "🎓",
	},
	{
		type: "education",
		side: "left",
		degree: "BSc (Computer Science)",
		institution: "Dr. D. Y. Patil Arts, Commerce and Science College, pimpri",
		period: "2021 – 2024",
		description: "Science stream with Computer Science. Scored 8.55 CGPA in SPPU Examinations.",
		icon: "🎓",
	},
	{
		type: "education",
		side: "right",
		degree: "Higher Secondary Certificate(12th)",
		institution: "Shri Vridheshwar Junior College, Tisgaon",
		period: "Jan 2020 – Apr 2021",
		description: "Cleared with distinction. Secured 83.67% in Maharashtra Board examinations",
		icon: "🎓",
	},
	{
		type: "education",
		side: "left",
		degree: "Secondary School Certificate(10th)",
		institution: "Shri Vridheshwar High School, Tisgaon",
		period: "2018 – 2019",
		description: "Cleared with distinction. Secured 83.4% in Maharashtra Board examinations.",
		icon: "🎓",
	},
];


const Frontend = () => {
	const itemsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.15 }
		);

		itemsRef.current.forEach((el) => el && observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<style>{`
      `}</style>

			<section className="tl-section">

				<div className="tl-wrapper">
					<div className="tl-line" />
					{timelineData.map((item, i) => (
						<div
							key={i}
							className={`tl-item ${item.side}`}
							ref={(el) => (itemsRef.current[i] = el)}
							style={{ transitionDelay: `${i * 0.1}s` }}
						>
							<div className="tl-card">
								<div className={`tl-badge ${item.type === "education" ? "badge-edu" : "badge-exp"}`}>
									{item.icon} {item.type}
								</div>
								<div className="tl-period">{item.period}</div>
								<div className="tl-degree">{item.degree}</div>
								<div className="tl-institution">{item.institution}</div>
								<p className="tl-desc">{item.description}</p>
							</div>
							<div className="tl-dot" />
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Frontend;
