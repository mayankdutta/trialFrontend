import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import Login from "./component/Login";
import AddProduct from "./component/addProduct";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route element={<PrivateComponent/>}>
                        <Route exact path="/" element={<h1>root</h1>}/>
                        <Route path="/home" element={<h1>Home, sweet home</h1>}/>
                        <Route path="/add" element={<h1>welcome to add</h1>}/>
                        <Route path="/update" element={""}/>
                        <Route path="/logout" element={""}/>
                        <Route path="/profile" element={""}/>
                        <Route path="/add-product" element={<AddProduct />}/>

                    </Route>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
};

export default App;
