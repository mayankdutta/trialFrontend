import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

// axios is used for sending this form data //

const SignUp = () => {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const signUp = () => {
    Axios.post("http://localhost:3001/signup", user).then((res) => {
      const { token, userId, firstName, lastName, userName, hashedPassword } =
        res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("userName", userName);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("hashedPassword", hashedPassword);
    });
  };
  return (
    <>
      <div>Login</div>
      <input
        placeholder="First Name"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <input
        placeholder="Last Name"
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
        }}
      />
      <input
        placeholder="User Name"
        onChange={(event) => {
          setUser({ ...user, userName: event.target.value });
        }}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <button onClick={signUp}>sign up</button>
    </>
  );
};

export default SignUp;
