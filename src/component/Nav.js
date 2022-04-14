import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
          <Link to="/logout"> Logout </Link>
        </li>
        <li>
          <Link to="/profile"> profile </Link>
        </li>
        <li>
          <Link to="/signup"> Sign up</Link>
        </li>
        <li>
          <Link to=""> product </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
