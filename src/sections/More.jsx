import React from "react";
import "../styles/More.css";
import { Link } from 'react-router-dom';

const More = () => {
  return (
    <section id="more">
      <div className="section-header">
        <h1>More Stuff</h1>
      </div>
      <div className="cards-container">
        <Link to="/writing" className="hobby-card">
          <h1>
            Writing <span className="arrow">→</span>
          </h1>
          <p>What I've been writing</p>
        </Link>
        <Link to="/reading" className="hobby-card">
          <h1>
            Reading <span className="arrow">→</span>
          </h1>
          <p>What I've been reading</p>
        </Link>
        <Link to="/misc" className="hobby-card">
          <h1>
            Miscellaneous <span className="arrow">→</span>
          </h1>
          <p>Anything else I've been working on</p>
        </Link>
      </div>
    </section>
  );
};

export default More;
