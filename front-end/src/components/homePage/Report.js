import React from "react";
import "./Report.css";

const Report = ({ title, subtitle }) => {
  return (
    <div className="report__page">
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  );
};

export default Report;
