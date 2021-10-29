import React from "react";
import BoxPage from "./BoxPage";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home__page">
      <div className="container__home">
        <h1>ตารางกำหนดการจองรถ</h1>
        <div className="box__top">
          <Link to="/driver" style={{ textDecoration: "none" }}>
            <BoxPage title="จองคนขับ" />
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <BoxPage title="จัดการตารางการจอง" />
          </Link>
        </div>
        <div className="box__buttom">
          <Link to="/bookingReport" style={{ textDecoration: "none" }}>
            <BoxPage title="รายการจอง" />
          </Link>

          <Link to="/Contact" style={{ textDecoration: "none" }}>
            <BoxPage title="ติดต่อเรา" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
