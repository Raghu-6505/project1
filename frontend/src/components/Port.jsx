import React, { useState } from 'react';
import './Port.css';

const Portfolio = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // ** UPDATED handleSubmit function to use fetch API **
    const handleSubmit = async (e) => {
        e.preventDefault();

        // The URL of your Express API endpoint
        const API_URL = "http://localhost:5000/api/contact"; 

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Form Submitted Successfully:", data);
                alert(`Thank you ${formData.name}, I’ll get back to you soon!`);
                // Clear the form
                setFormData({ name: "", email: "", message: "" });
            } else {
                // Handle server-side validation errors
                alert(`Submission failed: ${data.msg || 'An unexpected error occurred.'}`);
            }
        } catch (error) {
            console.error("Network or API call failed:", error);
            alert("An error occurred. Please try again later or contact me directly via email.");
        }
    };
    // ** END of UPDATED handleSubmit **

    return (
        <div>

            <nav className="navbar">
                <div className="logo">Raghunath</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#projects">My Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <section className="hero">
                <div className="hero-text">
                    <p>WELCOME</p>
                    <h1>Hi, I'm <span id="typed-name"></span></h1>
                    <h2>MERN STACK Developer</h2>
                    <p>
                        I'm passionate about crafting engaging and modern web experiences.
                        With a strong foundation in Frontend Development, I love bringing
                        creative ideas to life through clean and efficient code.
                    </p>

                    <div className="buttons">
                        <a href="#projects" className="btn">Explore My Work</a>
                        <a href="Raghu_Resume.pdf.pdf" download className="btn">Download My CV</a>
                    </div>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/raghunath-dev" target="_blank" rel="noreferrer">💼</a>
                        <a href="#">💬</a>
                        <a href="mailto:raghunath00146@gmail.com">📧</a>
                        <a href="#">🌐</a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="raghu.jpg" alt="Raghunath avatar" />
                </div>
            </section>


            <section id="about" className="section-container">
                <h2>About Me</h2>
                <p className="section-desc">
                    Hello! I'm Raghunath, an aspiring MERN Stack Developer with a solid
                    background in Electronics and Communication Engineering. My journey
                    into technology has been driven by a curiosity to build and innovate.
                    Here's a glimpse into my academic and professional growth.
                </p>

                <div className="grid-2">
                    <div className="info-card">
                        <h5>Education Journey</h5>
                        <ul>
                            <li><strong>Bachelor of Engineering in Electronics and Communication</strong>
                                <br/>Sri Ramakrishna Engineering College, Coimbatore, TN (2021-2025)
                                <br/>Achieved a GPA of 8.82 till 7th semester.
                            </li>
                            <li><strong>Higher Secondary Certificate</strong>
                                <br/>Vivekam Senior Secondary School (CBSE), Coimbatore, TN (2020-2021)
                                <br/><em>Secured 74.4%.</em>
                            </li>
                            <li><strong>Secondary School Leaving Certificate</strong>
                                <br/>Vivekam Senior Secondary School (CBSE), Coimbatore, TN (2018-2019)
                                <br/><em>Scored 72%.</em>
                            </li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h5>My Technical Toolkit</h5>
                        <ul>
                            <li><strong>Languages:</strong> Tamil, English, Kannada</li>
                            <li><strong>Programming Languages:</strong> C, Python</li>
                            <li><strong>Front End:</strong> HTML5, CSS3, JavaScript(ES6)</li>
                            <li><strong>Developer Tools:</strong> VS Code, Matlab</li>
                            <li><strong>Libraries:</strong> Matplotlib, OpenCV, Deep Learning frameworks</li>
                        </ul>
                    </div>
                </div>

                <div className="grid-2">
                    <div className="info-card">
                        <h5>Workshops & Certifications</h5>
                        <ul>
                            <li>Completed workshop on "CONNECTED CARS" at SREC.</li>
                            <li>Successfully completed "MERN Stack" at Xplore IT Corp.</li>
                            <li>Completed C and Python Language courses.</li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h5>Internship Experiences</h5>
                        <ul>
                            <li><strong>Salzer Electronics Ltd. Coimbatore</strong> (Jun 2023 - Jul 2023)</li>
                            <li><strong>Sunshiv Electronic Solutions, Coimbatore</strong> (Dec 2023 - Jan 2024)</li>
                            <li><strong>Innovate Engineering Products, Hosur</strong> (Feb 2025 - Apr 2025)</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section id="projects" className="section-container">
                <h2>My Creative Projects</h2>
                <p className="section-desc">
                    Here are some of the projects where I've applied my skills to solve
                    real-world problems and explore new technologies.
                </p>

                <div className="grid-2">
                    <div className="project-card">
                        <h5>Plant Health Monitoring & Irrigation System</h5>
                        <p>This project integrates sensors, a camera, and IoT to monitor plant health and automate irrigation, boosting agricultural efficiency.</p>
                        <p><strong>Key Technologies:</strong> Embedded Systems, IoT, Image Processing</p>
                    </div>

                    <div className="project-card">
                        <h5>Satellite Image Processing for Land Cover Classification</h5>
                        <p>Developed CNN, DenseNet121, and Inception models for classifying land cover from satellite images. Achieved 94% accuracy with DenseNet.</p>
                        <p><strong>Key Technologies:</strong> Python, OpenCV, Deep Learning</p>
                    </div>
                </div>
            </section>


            <section id="contact" className="section-container">
                <h2>Contact Me</h2>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="contact-name">Your Name</label>
                        <input
                            type="text"
                            id="contact-name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="contact-email">Email</label>
                        <input
                            type="email"
                            id="contact-email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="contact-message">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows="5"
                            placeholder="Enter your message here"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit" className="btn">Send Message here</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;