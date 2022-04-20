import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import Login from "./component/Login";
import AddProduct from "./component/addProduct";
import ProductList from "./component/ProductList";
import UpdateProduct from "./component/UpdateProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            {/* to let the react know that we wish to pass data in this route*/}
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={""} />
            <Route path="/profile" element={""} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
