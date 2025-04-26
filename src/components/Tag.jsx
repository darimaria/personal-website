import React from "react";
import "../styles/WritingPage.css";

const Tag = ({ labels, onClick, active }) => {
  const allLabels = ["All", ...labels];
  return (
    <div className="tag-list">
      {allLabels.map((label) => (
        <button
          key={label}
          onClick={() => onClick(label === "All" ? null : label)}
          className={`tag-button ${active === label ? "active" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tag;
