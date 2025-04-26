import React from "react";
import '../styles/EssayListItem.css';

const EssayListItem = ({ title, subtitle, date, onClick, isActive }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div
      className={`essay-list-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <h3 className="essay-title">{title}</h3>
      {subtitle && <p className="essay-subtitle">{subtitle}</p>}
      {formattedDate && <span className="essay-date">{formattedDate}</span>}
    </div>
  );
};

export default EssayListItem;
