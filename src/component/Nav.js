import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    // extra security
    navigate("/signup");
    // navigate automatically re render
  };
  return (
    <>
      <h1> Dashboard </h1>
      {/* anchor tag refreshes the pages, instead use react router*/}
      <ul>
        <li>
          <Link to="/home"> Home </Link>
        </li>
        <li>
          <Link to="/add"> AddItem </Link>
        </li>
        <li>
          <Link to="/update"> updateitem </Link>
        </li>
        <li>
          <Link to="/profile"> profile </Link>
        </li>
        <li>
          {auth ? (
            <Link to="/signup" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/signup"> Sign up</Link>
          )}
        </li>
        <li>
          <Link to="/"> product </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
