import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { dataUser1 } from "../../data";

const Profile = () => {
 
  function deleteData(id){
console.log(id)
  }
  function editData(id){
    console.log(id)
  }
  return (
    <div className="profile__page">
      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>

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
              <th>ประเภท</th>
              <th>วัดถุประสงค์</th>
              <th>สถานที่</th>
              <th>วันที่</th>
              <th>เวลา</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
            {dataUser1.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{`${item.surname} ${item.lastname}`}</td>
                  <td>{item.type}</td>
                  <td>{item.objective}</td>
                  <td>{item.place}</td>
                  <td>{item.startDate}</td>
                  <td>{item.time}</td>
                  <td>
                    <button onClick={()=>editData(index)} >แก้ไข</button>
                  </td>
                  <td>
                    <button onClick={()=>deleteData(index)} >ลบ</button>
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
