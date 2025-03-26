import React from "react";
import NavBar from "../components/NavBar";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <section id="about">
                <h1>about me</h1>
                <p>hey, i'm adam sirota. i'm from new york city and am currently studying computer science at the university of maryland.</p>
                
                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    
                    <a href="mailto:adamsirota2006@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                        <button>
                            <Mail size={16} /> Email
                        </button>
                    </a>

                    
                    <a href="https://github.com/adamsirota" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                        <button>
                            <SiGithub size={16} /> GitHub
                        </button>
                    </a>

                    
                    <a href="https://linkedin.com/in/adamsirota13" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                        <button>
                            <SiLinkedin size={16} /> LinkedIn
                        </button>
                    </a>
                </div>
            </section>

            <section id ="education">
                <h1>education</h1>
                <h3>university of maryland, college park</h3>
                <h4>expected graduation:</h4>
                <p>december 2026 (tentative)</p>
                <h4>relevant coursework:</h4>
                <p>cmsc132 - object-oriented programming</p>
                <p>stat400 - applied probability and statistics</p>
                <p>cmsc216 - computer systems</p>
                <p>cmsc250 - discrete structures</p>

                <h3>the bronx high school of science</h3>
                <p>september 2020 - june 2024</p>
                <h4>relevant coursework:</h4>
                <p>linear algebra, app development, ap computer science a, ap calculus bc</p>
            </section>

            <section id="skills">
                <h1>skills</h1>
                <h3>programming languages</h3>
                <p>comfortable in java, python, html, css, and javascript/typescript</p>
                <p>currently learning c and assembly</p>
                <h3>tools and technologies</h3>
                <p>comfortable with vs code, eclipse, jupyter notebook, git version control, react.js, and j unit testing</p>
            </section>

            <section id="projects">
                <h1>projects</h1> 
                <div className="project-card">
                    <h3 className="project-title">
                        <a href="https://github.com/adamsirota/bank-complaints-analysis" target='_blank'>
                            online test system <i className="fab fa-github"></i>
                        </a>
                    </h3>
                    <p>project built for object-oriented programming ii class at umd:</p>
                    <ol>
                        <li>developed a scalable data management system for an online test platform, supporting multiple question formats.</li>
                        <li>engineered an automatic grading system and generated statistical reports for students based on performance.</li>
                        <li>optimized data structures (maps, sets, lists) for efficient storage and retrieval.</li>
                        <li>designed and executed junit tests to ensure functionality.</li>
                    </ol>
                </div>
                <div className="project-card">
                    <h3 className="project-title">
                        <a href="https://github.com/adamsirota/bank-complaints-analysis" target='_blank'>
                            bank complaint analysis <i className="fab fa-github"></i>
                        </a>
                    </h3>
                    <p>capstone project made during pre-internship program at citigroup. used data science, machine learning, and ai techniques to:</p>
                    <ol>
                        <li>find and visualize trends in a large dataset of complaints filed to banks.</li>
                        <li>train a model to classify new incoming complaints automatically.</li>
                    </ol>
                    <p>presented findings to citigroup executives and peers.</p>
                </div>
                <div className="project-card">
                    <h3 className="project-title">
                        <a href="https://github.com/adamsirota/pitch-similarity-app" target='_blank'>
                            pitch similarity app <i className="fab fa-github"></i>
                        </a>
                    </h3>
                    <p>flask app that takes user input of attributes of a baseball pitch and finds the most similar pitches using up-to-date data from pybaseball.</p>
                </div>
                <div className="project-card">
                    <h3 className="project-title">
                        <a href="https://github.com/adamsirota/grade-calculator-app" target='_blank'>
                            grade calculator app <i className="fab fa-github"></i>
                        </a>
                    </h3>
                    <p>flutter app made in app development class. acts as a normal calculator and a gpa calculator that:</p>
                    <ul>
                        <li>takes user input for a student's classes and grades.</li>
                        <li>calculates average and converts to 4.0-scale gpa.</li>
                        <li>can calculate the total points the student needs to reach a target gpa/average.</li>
                    </ul>
                </div>
                <div className="project-card">
                    <h3 className="project-title">
                        <a href="https://github.com/adamsirota/ai-song-recommender" target='_blank'>
                            ai song recommender <i className="fab fa-github"></i>
                        </a>
                    </h3>
                    <p>project made in preparation for citigroup pre-internship program. uses cosine similarity to recommend similar songs from a dataset based on user input.</p>
                </div>
            </section>

        </>
    );
};

export default Home;
