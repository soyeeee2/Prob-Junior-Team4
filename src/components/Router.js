import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TDhome from "../routes/TDhome";
import TDdetail from "../routes/TDdetail";
import MainPage from "../routes/MainPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/TDhome" exact={true} element={<TDhome />}></Route>
        <Route path="/TDdetail" element={<TDdetail />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter ;
