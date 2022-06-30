import * as React from "react"
import Navbar from "./Navbar/Navbar"
import LandingPage from "./LandingPage/LandingPage"
import LoginPage from "./LoginPage/LoginPage"
import RegistrationPage from "./RegistrationPage/RegistrationPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar loggedIn={loggedIn}/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          {/* <Route path="/activity" element={<ActivityPage/>}/>
          <Route path="/nutrition/*" element={<NutritionPage/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>

        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
