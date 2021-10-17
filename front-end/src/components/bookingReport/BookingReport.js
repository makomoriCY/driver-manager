import React from "react";
import { Link } from "react-router-dom";
import "./BookingReport.css";
import {dataDriven} from "../../data";

const BookingReport = () => {
  console.log(dataDriven);
  return (
    <div className="background___page">
      <h1>รายการจอง</h1>

      <div className="BOX__Book">
        <table className="Text__P">
          <tr>
            <th>ชื่อผู้จอง</th>
            <th>ประเภท</th>
            <th>วัดถุประสงค์</th>
            <th>สถานที่</th>
            <th>วันที่</th>
            <th>เวลา</th>
          </tr>
          {dataDriven.map((item, index) => {
            return (
              <tr key={index}>
                <td>{`${item.surname} ${item.lastname}`}</td>
                <td>{item.type}</td>
                <td>{item.objective}</td>
                <td>{item.place}</td>
                <td>{item.startDate}</td>
                <td>{item.time}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>
    </div>
  );
};

export default BookingReport;
