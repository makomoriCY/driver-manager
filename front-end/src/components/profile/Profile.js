import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./Profile.css";
import axios from "../../axios";

const Profile = () => {
  const [data, setData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const ID = "123456789";
  const PASSWORD = "123456789";

  function login() {
    if (ID === username && password === PASSWORD) {
      setIsAdmin(true);
    }
  }

  useEffect(() => {
    axios
      .get("schedule")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  function deleteData(id) {
    axios
      .delete(`schedule/${id}`)
      .then(() => console.log("ลบข้อมูล"))
      .catch((err) => console.log(err));
    loadlist();
  }

  function loadlist() {
    axios
      .get("schedule")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  function editData(id) {
    console.log(id);
  }
  return (
    <div
      className="profile__page"
    >
      <Link to="/">
      <div className="Btn__back" >
      <Button  variant="contained" startIcon={<ArrowBackIosIcon />}>
        ย้อนกลับ
      </Button>
      </div>
      </Link>
      <h1>จัดการตารางการจอง</h1>
      {isAdmin === false ? (
        <div className="Box" >
        <div className="Login" >
          <h1>กรุณากรอบรหัส</h1>
          <h3>username</h3>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h3>password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div>
            <button onClick={login}>Login</button>
          </div>
        </div>
        </div>
      ) : (
        <div className="BOX__Book" >
        <div >
          <div className="table__right">
            <p>ตารางการจอง</p>
            <table>
              <tr>
                <th>ชื่อ</th>
                <th>แผนก</th>
                <th>ประเภท</th>
                <th>วัดถุประสงค์</th>
                <th>จุดหมายปลายทาง</th>
                <th>วันที่เริ่ม</th>
                <th>วันที่สิ้นสุด</th>
                <th>เวลาเริ่ม</th>
                <th>เวลาสิ้นสุด</th>
                <th>อนุมัติ</th>
                <th>ลบ</th>
              </tr>
              {data.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{`${item.surname} ${item.lastname}`}</td>
                    <td>{item.department}</td>
                    <td>{item.type}</td>
                    <td>{item.objective}</td>
                    <td>{item.place}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>{item.startTime}</td>
                    <td>{item.endTime}</td>
                    <td>{item.approve}</td>
                    <td>
                      <button onClick={() => deleteData(item._id)}>ลบ</button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
