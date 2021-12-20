import React from "react";
import {BrowserRouter, Route, Routes}   from "react-router-dom";
import Home from "../pages/Home";
import About  from "../pages/About";
import Books from "../pages/Books";
import Header from "../components/Header/Header";
const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about/" element={<About/>}/>
            <Route path="/Books/" element={<Books/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;

