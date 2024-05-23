import React from "react";
import './Interests.css'

const Interests = () => {
  return (
    <div id='interests' className="interests">
      <div className="interest-container">
        <h1>More About Me</h1>
      </div>
      <div className="interest-box">
      <div className="interest-section">
        <div className="extracurriculars-section">
          <h2>Extracurriculars</h2>
          <p>For extracurriculars, I am currently in Robotics. I assist with designing the robots as well as with fundraising. On my free time, I like to play tennis which has been a hobby of mine since high school. I also try to volunteer during my breaks with the latest ones being at Christmas Gift Wrapping and Father Joe's village.</p>
        </div>
      </div>
      <div className="interest-section">
        <div className="academic-section">
          <h2>Academic Interests</h2>
          <p>I am mainly interested in UI/UX design as it provides a creativity aspect. I enjoy making web pages aestheic looking and accessible to all kinds of users.</p>
          <p>I am also interested in web development, mainly frontend as it is the part where I can visually see what I am coding. I find that the frontend is more enjoyable compared to the backend</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Interests

