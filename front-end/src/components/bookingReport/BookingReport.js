import React from "react";
import { Link } from "react-router-dom";
import "./BookingReport.css";

const BookingReport = () => {
  return (
    <div className="background___page">
      <h1>รายงานการจอง</h1>

      <div className="BOX__Book">
        <p>รายการ</p>
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
        </table>
        <textarea
            rows="8"/>
      </div>

      <Link to="/">
        <button className="Btn__back">ย้อนกลับ</button>
      </Link>
    </div>
  );
};

export default BookingReport;
