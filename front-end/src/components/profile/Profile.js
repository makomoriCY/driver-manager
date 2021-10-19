import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { dataUser1 } from "../../data";
import axios from "../../axios";
import Button from '@mui/material/Button';

const Profile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("schedule")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data)

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
    <div className="profile__page">
      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>
      <Button variant="contained">ทดสอบปุ่ม</Button>
      <h1>ข้อมูลส่วนตัว</h1>
      <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
      <div className="name__box">
        <p>ชื่อ: {`${dataUser1[0].surname} ${dataUser1[0].lastname}`} </p>
        <p> แผนก: {dataUser1[0].department} </p>
      </div>
      <div className="table__container">
        <div className="table__right">
          <p>ประวัติการจอง</p>
          <table>
            <tr>
              <th>ชื่อ</th>
              <th>แผนก</th>
              <th>ประเภท</th>
              <th>วัดถุประสงค์</th>
              <th>สถานที่</th>
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
  );
};

export default Profile;
