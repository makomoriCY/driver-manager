import React, { useState } from "react";
import { Link } from "react-router-dom";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import "./Driver.css";
import axios from "../../axios";

const Driver = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [depart, setDepart] = useState("");
  const [objective, setObjective] = useState("");
  const [place, setPlace] = useState("");
  const [enddate, setEnddate] = useState("");

  function submit() {
    const post = {
      startDate: date,
      endDate: enddate,
      surname: name,
      lastname: lastname,
      department: depart,
      objective: objective,
      type: type,
      startTime: startTime,
      endTime: endTime,
      place: place,
    };
    if (
      !(
        date &&
        type &&
        lastname &&
        depart &&
        objective &&
        name &&
        startTime &&
        endTime &&
        enddate
      )
    ) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
      axios
        .post("/schedule", post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setDate("");
      setDepart("");
      setLastname("");
      setName("");
      setObjective("");
      setPlace("");
      setStartTime("");
      setType("");
      setEndTime("");
      console.log(post);
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
            <option value="รถตู้">รถบรรทุกหกล้อ</option>
            <option value="คนส่งเอกสาร">คนส่งเอกสาร</option>
          </select>
        </div>
        <div>
          <p>เวลาที่ต้องการจอง</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="date"
            value={enddate}
            onChange={(e) => setEnddate(e.target.value)}
          />
        </div>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <div className="Text__ip">
          <p1>ชื่อ</p1>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p1>นามสกุล</p1>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <p1>แผนก</p1>
          <input value={depart} onChange={(e) => setDepart(e.target.value)} type="number" />
          <p1>จุดประสงค์</p1>
          <textarea
            rows="3"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
          <p1>จุดหมายปลายทาง</p1>
          <textarea
            rows="8"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
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
        <div className="Btn__back" >
      <Button  variant="contained" startIcon={<ArrowBackIosIcon />}>
        ย้อนกลับ
      </Button>
      </div>
      </Link>
    </div>
  );
};

export default Driver;
