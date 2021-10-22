import { report } from "process";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';

const Contact = () => {

  const [name, setName] = useState ("");
  const [surName, setSurname] = useState (""); 
  const [depart, setDepart] = useState (""); 
  const [email, setEmail] = useState (""); 
  const [report, setReport] = useState (""); 

  function submit () {
    const data ={
      name:name,
      surName:surName,
      depart:depart,
      email:email,
      report:report
    };
    if (!( name  && depart && email && depart && surName)) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
      console.log(data);
      setName("")
      setDepart("")
      setEmail("")
      setSurname("")
      setReport("")
      
    }
  }

  return (
    <div className="background___page">
      <h1>ติดต่อเรา</h1>

      <div className="Box">
        <div className="Text__Box" >
          <p>ชื่อ</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>นามสกุล</p>
          <input value={surName} onChange={(e) => setSurname(e.target.value)} />
          <p>แผนก</p>
          <input value={depart} onChange={(e) => setDepart(e.target.value)} />
          <p>อีเมล์</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>รายงานปัญหา</p>
          <textarea value={report} onChange={(e) => setReport(e.target.value)}
            rows="8"/>
        </div>
        <div className="Back__confirm" >
          <button onClick={submit} >ตกลง</button>
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

export default Contact;
