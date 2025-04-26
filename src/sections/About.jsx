import React from "react";
import "../styles/About.css";
import dari from "../assets/dari.jpeg";

const About = () => {
  return (
    <div id="about">
      <div className="section-header">
        <h1>About Me</h1>
      </div>
      <div className="about-container">
        <div className="image-container">
          <img src={dari} alt="Dari" />
        </div>
        <div className="paragraph-container">
          <p>Hi, I’m Dari—a computer science graduate with a love for writing, reading, coding, and creating art. This space is a blend of my technical side and creative passions, where I share projects, ideas, and works that mean the most to me. Whether it’s code or canvas, I’m always building something with heart.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
