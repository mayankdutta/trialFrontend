import React, { useState } from "react";

const Login = () => {
  const [UserName, setUserName] = useState("");
  const [PassWord, setPassWord] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <label>UserName</label>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label>PassWord</label>
      <input
        type="password"
        onChange={(e) => {
          setPassWord(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
