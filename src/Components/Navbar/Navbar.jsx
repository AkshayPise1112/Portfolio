import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { RiHomeSmileFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { BiSolidBookBookmark } from 'react-icons/bi';
import { AiFillProject } from 'react-icons/ai';
import { BiSolidMessageDetail } from 'react-icons/bi';

const Navbar = ({ actNav }) => {
	const [activeClass, setActiveClass] = useState('#');

	useEffect(() => {
		setActiveClass(actNav);
	}, [actNav]);

	return (
		<nav>
			<a
				href="#"
				onClick={() => setActiveClass('#')}
				className={activeClass === '#' ? 'active' : ''}
			>
				<RiHomeSmileFill />
			</a>
			<a
				href="#About"
				onClick={() => setActiveClass('#About')}
				className={activeClass === '#About' ? 'active' : ''}
			>
				<FaUserCircle />
			</a>
			<a
				href="#Experience"
				onClick={() => setActiveClass('#Experience')}
				className={activeClass === '#Experience' ? 'active' : ''}
			>
				<BiSolidBookBookmark />
			</a>
			<a
				href="#Portfolio"
				onClick={() => setActiveClass('#Portfolio')}
				className={activeClass === '#Portfolio' ? 'active' : ''}
			>
				<AiFillProject />
			</a>
			<a
				href="#Contact"
				onClick={() => setActiveClass('#Contact')}
				className={activeClass === '#Contact' ? 'active ' : ''}
			>
				<BiSolidMessageDetail />
			</a>
		</nav>
	);
};

export default Navbar;
