import React, { useEffect, useState } from "react";
import "./Hero.css";
import pfp from "../images/pfp.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const textToType = "Heello, I'm Jenny Quan!";
  const textToType2 = "I  am currently a 4th Year Computer Science Student at UC Riverside!";

  useEffect(() => {
    let charIndex = 0;

    const typing = setInterval(() => {
      if (charIndex < textToType.length) {
        setTypedText((prev) => prev + textToType.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typing);
        startSecondText();
      }
    }, 100);

    const startSecondText = () => {
      let charIndex2 = 0;
      const typing2 = setInterval(() => {
        if (charIndex2 < textToType2.length) {
          setTypedText2((prev) => prev + textToType2.charAt(charIndex2));
          charIndex2++;
        } else {
          clearInterval(typing2);
        }
      }, 75);
    };

    return () => {
      clearInterval(typing);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div id='home' className="hero">
        <img src={pfp} alt="" />
        <h1>
          <span>{typedText}</span>
        </h1>
        <p>{typedText2}</p>
        <div className="action">
          <div className="connect-hero" onClick={() => scrollToSection("footer")}>Contact</div>
          <div className="resume-hero">Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
