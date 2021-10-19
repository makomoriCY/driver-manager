import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookingReport.css";

import axios from "../../axios";

const BookingReport = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("schedule")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="background___page">
      <h1>รายการจอง</h1>

      <div className="BOX__Book">
        <table className="Text__P">
          <tr>
            <th>ชื่อผู้จอง</th>
            <th>แผนก</th>
            <th>ประเภท</th>
            <th>วัดถุประสงค์</th>
            <th>สถานที่</th>
            <th>วันที่เริ่ม</th>
            <th>วันที่สิ้นสุด</th>
            <th>เวลาเริ่ม</th>
            <th>เวลาสิ้นสุด</th>
            <th>อนุมัติ</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{`${item.surname} ${item.lastname}`}</td>
                <td>{item.Department}</td>
                <td>{item.type}</td>
                <td>{item.objective}</td>
                <td>{item.place}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.timestart}</td>
                <td>{item.timeend}</td>
                <td>{item.approve}</td>
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
