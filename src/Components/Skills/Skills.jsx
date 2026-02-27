import React from 'react'
import './Skills.css';
import { FiServer } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { FiDatabase } from "react-icons/fi";
import { TbSettingsCode } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa6";

const Skills = () => {
    return (
        <div className='container skillCardContainer'>
            <div className='skillCard'>
                <div className='skillCardHeader'>
                    <FaCode />
                    <h2>Frontend</h2>
                </div>
                <div className='skills'>
                    <p className='skill'>HTML5</p>
                    <p className='skill'>CSS</p>
                    <p className='skill'>Javascript</p>
                    <p className='skill'>React.js</p>
                    <p className='skill'>Angular.js</p>
                </div>
            </div>
            <div className='skillCard'>
                <div className='skillCardHeader'>
                    <FiServer />
                    <h2>Backend</h2>
                </div>
                <div className='skills'>
                    <p className='skill'>Node.js</p>
                    <p className='skill'>Express.js</p>
                    <p className='skill'>PHP</p>
                    <p className='skill'>Restful API</p>
                    <p className='skill'>Python</p>
                </div>
            </div>
            <div className='skillCard'>
                <div className='skillCardHeader'>
                    <FiDatabase />
                    <h2>Database</h2>
                </div>
                <div className='skills'>
                    <p className='skill'>MongoDB</p>
                    <p className='skill'>SQL</p>
                    <p className='skill'>NoSQL</p>
                    <p className='skill'>Mysql</p>
                    <p className='skill'>Postgresql</p>
                </div>
            </div>
            <div className='skillCard'>
                <div className='skillCardHeader'>
                    <TbSettingsCode />
                    <h2>Tools</h2>
                </div>
                <div className='skills'>
                    <p className='skill'>Git/Github</p>
                    <p className='skill'>VS Code</p>
                    <p className='skill'>Postman</p>
                    <p className='skill'>Linux</p>
                    <p className='skill'>Docker</p>
                    <p className='skill'>Jupyter</p>
                    <p className='skill'>ChatGPT</p>
                    <p className='skill'>Claude Code</p>
                    <p className='skill'>Ollama</p>

                </div>
            </div>
            <div className='skillCard wide'>
                <div className='skillCardHeader'>
                    <FaLaptopCode />
                    <h2>CS Fundamentals</h2>
                </div>
                <div className='skills'>
                    <p className='skill'>Data Structures and Algorithms</p>
                    <p className='skill'>Operating System</p>
                    <p className='skill'>Computer Networking</p>
                    <p className='skill'>Object Oriented Programming</p>
                    <p className='skill'>Software Development Life Cycle</p>
                    <p className='skill'>Artificial Intelligence</p>
                    <p className='skill'>Machine Learning</p>
                    <p className='skill'>Prompt Engineering</p>

                </div>
            </div>

        </div>
    )
}

export default Skills