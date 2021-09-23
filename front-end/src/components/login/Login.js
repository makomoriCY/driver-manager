import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log({ username });

  return (
    <div className="login__page">
      <h1>Login page </h1>
      <div>
        <p>username </p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <p>password</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <div className="btn__Login">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Login;
