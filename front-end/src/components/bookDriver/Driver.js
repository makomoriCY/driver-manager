import React, { useState } from "react";
import { Link } from "react-router-dom";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import "./Driver.css";
import axios from "../../axios";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
      <h1>จองคนขับ</h1>
      <div className="Box">
        <div className="input__margin">
          <InputLabel id="demo-simple-select-helper-label">
            เลือกประเภทการจอง
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Age"
            fullWidth
          >
            <MenuItem value="รถกระบะ">รถกระบะ</MenuItem>
            <MenuItem value="รถตู้">รถตู้</MenuItem>
            <MenuItem value="รถบรรทุกหกล้อ">รถบรรทุกหกล้อ</MenuItem>
            <MenuItem value="คนส่งเอกสาร">คนส่งเอกสาร</MenuItem>
          </Select>
        </div>
        <div className="date__box">
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="date"
              value={enddate}
              onChange={(e) => setEnddate(e.target.value)}
            />
          </div>
        </div>

        <div className="time__box">
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <div className="Text__ip">
          <div className="input__margin">
            <TextField
              label="ชื่อ"
              color="primary"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              label="นามสกุล"
              color="primary"
              fullWidth
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              label="แผนก"
              color="primary"
              fullWidth
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              type="number"
            />
          </div>
          <div className="input__margin">
            <TextField
              label="จุดประสงค์"
              multiline
              fullWidth
              rows={2}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              label="จุดหมายปลายทาง"
              multiline
              fullWidth
              rows={2}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        </div>

        <div className="confirm">
          <Button
            variant="contained"
            startIcon={<SaveSharpIcon />}
            onClick={submit}
          >
            ตกลง
          </Button>

          <div className="back__01">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                startIcon={<CloseTwoToneIcon />}
                color="warning"
              >
                ยกเลิก
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Link to="/">
        <div className="Btn__back">
          <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
            ย้อนกลับ
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Driver;
