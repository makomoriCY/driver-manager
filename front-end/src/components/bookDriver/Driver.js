import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Driver.css";

const Driver = () => {
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [depart, setDepart] = useState("");
  const [objective, setObjective] = useState("");

  function submit() {
    const data = {
      startDate: date,
      surname: name,
      lastname: lastname,
      department: depart,
      objective: objective,
      type: type,
      time: time,
    };
    if (!(date && type && lastname && depart && objective && time && name)) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
      console.log(data);
    }
  }
  return (
    <div className="Dver__page">
      <h1>รายการจอง</h1>
      <div className="Box">
        <div>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">เลือกประเภทการจอง</option>
            <option value="รถกระบะ">รถกระบะ</option>
            <option value="รถตู้">รถตู้</option>
            <option value="คนส่งเอกสาร">คนส่งเอกสาร</option>
          </select>
        </div>
        <div>
          <p> เวลาที่ต้องการจอง </p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="Text__ip">
          <p1>ชื่อ</p1>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p1>นามสกุล</p1>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <p1>แผนก</p1>
          <input value={depart} onChange={(e) => setDepart(e.target.value)} />
          <p1>จุดประสงค์</p1>
          <textarea
            rows="8"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
        </div>

        <div className="confirm">
          <button onClick={submit}>ตกลง</button>
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

export default Driver;
