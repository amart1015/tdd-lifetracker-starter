import * as React from "react"
import Navbar from "./Navbar/Navbar"
import LandingPage from "./LandingPage/LandingPage"
import LoginPage from "./LoginPage/LoginPage"
import RegistrationPage from "./RegistrationPage/RegistrationPage"
import NotFound from "./NotFound/NotFound"
import ActivityPage from "./ActivityPage/ActivityPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [appState, setAppState] = useState({})
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} user={appState.user}/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage setAppState={setAppState} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/register" element={<RegistrationPage setAppState={setAppState} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/activity" element={<ActivityPage loggedIn={loggedIn}/>}/>
          {/* <Route path="/nutrition/*" element={<NutritionPage/>}/> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
