import React from "react";
import { Link } from "react-router-dom";
import "./Driver.css";
import Calendar from 'react-calendar';

const Driver = () => {
  return (
    
    <div className="Dver__page">
      <h1>รายการจอง</h1>
      <div>
        <input></input>
      </div>

      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>
    </div>
  );
};

export default Driver;
