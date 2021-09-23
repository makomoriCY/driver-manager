import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login__page">
      <h1>Login page </h1>
      <div>
        <p>username </p>
        <input />
      </div>
      <div>
        <p>password</p>
        <input />
      </div>
      <div className="btn__Login">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Login;
