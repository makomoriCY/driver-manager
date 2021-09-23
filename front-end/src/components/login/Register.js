import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register__page">
      <div>
        <h1>Register page</h1>
        <p> username </p>
        <input />
        <p> password </p>
        <input />
        <p> Email </p>
        <input />
        <p> phone </p>
        <input />
      </div>
      <div className="btn__register">
        <button>submit</button>
        <button>back</button>
      </div>
    </div>
  );
};

export default Register;
