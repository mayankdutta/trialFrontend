import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
<Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route exact path="/" element={""} />
            <Route exact path="/add" element={""} />
            <Route exact path="/update" element={""} />
            <Route exact path="/logout" element={""} />
            <Route exact path="/profile" element={""} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
