import { React, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/Experience.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const Experience = ({ fileURL }) => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="experience-section">
      <div className="section-header">
        <h1>Experience</h1>
      </div>
      <div className="pdf-header">
        <p>
          I graduated from the University of Rochester with a Bachelor's degree
          in Computer Science with a focus in machine learning and data
          engineering. My summers were spent doing biomedical research, working
          on personal projects, or developing software at USAA as an intern. I
          now work full time at USAA as a Software Engineer, developing frontend
          code for the consumer lending experience.
        </p>
        <p>
          Curiosity drives me to explore new territory and obtain different
          skills. For this reason, I am always working on some project or in
          search of the next thing I can sink my teeth into and learn about. I
          am continuously growing and expanding my skill set but if you are
          curious about what follows me, take a look at{' '}
          <a href={fileURL} target="_blank" rel="noopener noreferrer">
          my resume.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Experience;
