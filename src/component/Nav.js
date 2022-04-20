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
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/update"> updateitem </Link>
        </li>
        <li>
          <Link to="/profile"> profile </Link>
        </li>
        {auth ? (
          <li>
            <Link to="/login" onClick={logout}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <Link to="/signup"> Sign up</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/add-product"> Add product </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
