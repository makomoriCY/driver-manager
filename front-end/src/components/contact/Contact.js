import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="background___page">
      <h1>ติดต่อเรา</h1>
      <div className="Box">
        <p>8;k,</p>
      </div>
      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>
    </div>
  );
};

export default Contact;
