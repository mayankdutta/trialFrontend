import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import SignUp from "./component/SignUp"

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={""} />
            <Route path="/add" element={""} />
            <Route path="/update" element={""} />
            <Route path="/logout" element={""} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
