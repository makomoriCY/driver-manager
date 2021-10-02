import React from "react";
import { Link } from "react-router-dom";
import "./Driver.css";

const Driver = () => {
  return (
    <div className="Dver__page">
      <h1>รายการจอง</h1>
      <div className="Box">
        <div>
          <button>เลือกประเภทการจอง</button>
        </div>

        <input type="date" />

        <div className="Text__ip">
          <p1>ชื่อ</p1>
          <input />
          <p1>นามสกุล</p1>
          <input />
          <p1>แผนก</p1>
          <input />
          <p1>จุดประสงค์</p1>
          <input className="T" />
        </div>

        <div className="confirm">
          <button>ตกลง</button>
          <button>ยกเลิก</button>
        </div>
        
      </div>

      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>
    </div>
  );
};

export default Driver;
