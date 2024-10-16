import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import '../../About.scss'

export default function About() {
    return (
        <div className="about">
            <h2>MEET OUR HEROES</h2>
            <div className="about-container">
                <div className="item-about">
                    <img src="/avatar/Harold avatar.png" alt="Harold Kinet" />
                    <h3>Harold Kinet</h3>
                    <p>Visionary Captain</p>
                    <div className="round-icon">
                    <a href="https://www.linkedin.com/in/haroldkinet/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin-icon" />
                    </a>
                    </div>
                </div>
                <div className="item-about">
                    <img src="/avatar/Steve Avatar2.png" alt="Steve Vansimpsen" />
                    <h3>Steve Vansimpsen</h3>
                    <p>Financial Wizard</p>
                    <div className="round-icon">
                    <a href="https://www.linkedin.com/in/steve-vansimpsen-465982101/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin-icon" />
                    </a>
                    </div>
                </div>
                <div className="item-about">
                    <img src="/avatar/Tarek afvatar.png" alt="Tarek Kamoun" />
                    <h3>Tarek Kamoun</h3>
                    <p>Technology Guru</p>
                    <div className="round-icon">
                    <a href="https://www.linkedin.com/in/tarek-kamoun-73981997/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin-icon" />
                    </a>
                    </div>
                </div>
                <div className="item-about">
                    <img src="/avatar/Tarek afvatar.png" alt="Tom Guisgand" />
                    <h3>Tom Guisgand</h3>
                    <p>Operational Maestro</p>
                    <div className="round-icon">
                    <a href="https://www.linkedin.com/in/tomguis/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin-icon" />
                    </a>
                    </div>
                </div>
            </div>
            <div className="community-section">
                <h4>JOIN OUR EARLY COMMUNITY</h4>
                <a href="https://t.me/+vS9eoJ7vzoc4MTZk" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="telegram-icon" />
                </a>
            </div>
        </div>
    )
}