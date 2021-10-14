import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {

  const [name, setName] = useState ('');
  console.log()

  return (
    <div className="background___page">
      <h1>ติดต่อเรา</h1>

      <div className="Box">
        <div className="Text__Box" >
          <p>ชื่อ</p>
          <input onChange={(e) => setName(e.target.value)} />
          <p>นามสกุล</p>
          <input />
          <p>แผนก</p>
          <input />
          <p>อีเมล์</p>
          <input />
          <p>รายงานปัญหา</p>
          <textarea
            rows="8"/>
        </div>
        <div className="Back__confirm" >
          <button>ตกลง</button>
          <Link to="/">
          <button>ยกเลิก</button>
          </Link>
        </div>
      </div>

      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>
    </div>
  );
};

export default Contact;
