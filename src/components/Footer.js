import React from "react";
import './Footer.css';
import githubicon from '../images/githubicon.png';
import linkedinicon from '../images/linkedinicon.png';
import gmailicon from '../images/gmail-icon.png';

const Footer = () => {
  return (
    <div id='footer' className="footer">
      <div className="footer-box">
        <div className="footer-title">
          Connect With Me
        </div>
        <div className="footer-item">
          <a href="https://github.com/jquan026" target="_blank" rel="noopener noreferrer">
            <img src={githubicon} alt="GitHub" className="small-image" />
            <span className="username">@jquan026</span>
          </a>
        </div>
        <div className="footer-item">
          <a href="https://www.linkedin.com/in/jenny-quan-588277298/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinicon} alt="LinkedIn" className="small-image" />
            <span className="username">@jenny quan</span>
          </a>
        </div>
        <div className="footer-item">
          <img src={gmailicon} alt="Gmail" className="small-image" />
          <span className="username">@jennyquann@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
