import React from "react";
import './Experience.css';

const Experience = () => {
  return (
    <div id="projects"className="experience-section">
      <div className="experience-title">
        <h1>Projects</h1>
      </div>
      <div className="card-section">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p className="background">Skincare</p>
            </div>
            <div className="card-back">
              <span>Clean Skin is a web application designed for those who want to learn more about skin care or those who are skincare enthusiast.</span>
              <span>I created and mainly contributed to the frontend of the application.</span>
              <span>Created using JavaScript, MongoDB, and CSS</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p className="background">Scotties Crib</p>
            </div>
            <div className="card-back">
              <span>Scotties Crib is a marketplace app designed for students.</span>
              <span>I assisted with the login system and made the admin controls.</span>
              <span>Created using JavaScript, CSS, Expo and AsyncStorage</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p className="background">MedShare</p>
            </div>
            <div className="card-back">
              <span>MedShare is a medical web application aimed to make medical care easier.</span>
              <span>I contributed to creating the frontend of the home page as well as the appointment system page.</span>
              <span>Created using JavaScript, MongoDB, and CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
