import React from "react";
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className="skills">
      <div className="title-container">
        <h1>Education + Skills</h1>
      </div>
      <div className="info-section">
        <div className="left-section">
          <h1>Education</h1>
          <ul>
          <li> <b>B.S Computer Science</b> - <em>University of California, Riverside</em> (2020-2024)</li>
          <ul>
          <li> CS110 - Introduction To Web Development</li>
          <li> CS180 - Introduction To Software Engineering</li>
          </ul>
          <li> <b> High School Diploma</b> - <em>Helix Charter High School</em> (2016-2020)</li>
          <ul>
          <li> AP Computer Science</li>
          <li> AP Computer Science Principles</li>
          </ul>
          </ul>
        </div>
        <div className="right-section">
          <h1>Skills</h1>
          <div className="skill-list">
          <li>HTML/CSS</li>
          </div>
          <div className="skill-list">
          <li>JavaScript</li>
          </div>
          <div className="skill-list">
          <li>C++</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills