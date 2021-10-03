import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const name = "tititititi";
  const department = "ป้องกันภัย";
  return (
    <div className="profile__page">
      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>

      <h1>ข้อมูลส่วนตัว</h1>
      <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" />
      <div className="name__box">
        <p>ชื่อ: {name}</p>
        <p> แผนก: {department} </p>
      </div>
      <div className="table__container">
        <div className="table__left">
          <p>รายการล่าสุด</p>
          <table>
            <tr>
              <th>วัดถุประสงค์</th>
              <th>สถานที่</th>
              <th>วันเวลา</th>
              <th>คนขับ</th>
            </tr>
            <tr>
              <td>ดาวอังคาร</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>ไก่</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>หมูป่า</td>
            </tr>
          </table>
        </div>
        <div className="table__right">
          <p>ประวัติการจอง</p>
          <table>
            <tr>
              <th>วัดถุประสงค์</th>
              <th>สถานที่</th>
              <th>วันเวลา</th>
              <th>คนขับ</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
