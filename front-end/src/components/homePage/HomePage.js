import React from "react";
import BoxPage from "./BoxPage";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home__page">
      <div className='container__home' >

        <div  >
          <input/>
        </div>

      <div className="box__top">
        <Link to="/driver">
        <BoxPage
          title="จองคนขับ"
          pi="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg "
        />
        </Link>
      <Link to="/profile">
        <BoxPage
          title="ข้อมูลส่วนตัว"
          pi="data:image/jpeg;base64,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"
        />
      </Link>
      </div>
      <div className="box__buttom">
        <Link to="/bookingReport" >
        <BoxPage
          title="รายงานการจอง"
          pi="data:image/jpeg;base64,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"
        />
        </Link>

        <Link to="/Contact" >
        <BoxPage
          title="ติดต่อเรา"
          pi="data:image/jpeg;base64,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"
        />       
        </Link>
        
      </div>
      </div>

    </div>
  );
};

export default HomePage;
