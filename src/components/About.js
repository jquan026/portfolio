import React from "react";
import './About.css'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="about-description">
          <p>I am currently a 4th year student at UC Riverside studying Computer Science. I will be graduating in Summer 2024. After graduating I hope to become a Project or Product Manager as well as becoming a Web Designer.</p>
          <p>Through the projects for my classes, I have mainly used C++, Javascript, HTML and CSS. I tend to enjoy working
            on the frontend development compared to the backend. I enjoy the process of using my creativity with the art of programming. </p>
      </div>
      <div className="about-section">
        <div className="left-section">
          <h1>Interests</h1>
          <li>UI/UX Design</li>
          <li>Web Development</li>
        </div>
        <div className="right-section">
          <h1>Career Goals</h1>
          <li>Project/Product Manager</li>
          <li>Web Designer</li>
        </div>
      </div>
    </div>
  )
}

export default About