import * as React from "react"
import Navbar from "./Navbar/Navbar"
import LandingPage from "./LandingPage/LandingPage"
import LoginPage from "./LoginPage/LoginPage"
import RegistrationPage from "./RegistrationPage/RegistrationPage"
import NotFound from "./NotFound/NotFound"
import ActivityPage from "./ActivityPage/ActivityPage"
import NutritionPage from "./NutritionPage/NutritionPage"
import ExercisePage from "./ExercisePage/ExercisePage"
import SleepPage from "./SleepPage/SleepPage"
import { AuthContextProvider, useAuthContext } from "../../contexts/auth"
import ApiClient from "../../services/apiClient"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [appState, setAppState] = useState({})
  const {setUser, setError, setIsProcessing, setInitialized} = useAuthContext()
  
  React.useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await ApiClient.fetchUserFromToken()
      if (error?.response?.data?.error?.status !== 304) {
        setError((e) => ({ ...e, user: error }))
      }
      if (data?.user) {
        setUser(data.user)
        setError((e) => ({ ...e, user: null }))
      }
    }

    const token = localStorage.getItem("lifetracker_token")
    if (token) {
      ApiClient.setToken(token)
      setError(null)
      fetchUser()
    }

    setInitialized(true)
  }, [setUser, setIsProcessing, setError, setInitialized])

  const handleLogout = async () => {
    await ApiClient.logoutUser()
    setLoggedIn(false)
    setUser({})
    setError(null)
  }

  
  
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} user={appState.user} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage setAppState={setAppState} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/register" element={<RegistrationPage setAppState={setAppState} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/activity" element={<ActivityPage loggedIn={loggedIn}/>}/>
          <Route path="/nutrition/*" element={<NutritionPage loggedIn={loggedIn}/>}/>
          <Route path="/exercise/*" element={<ExercisePage loggedIn={loggedIn}/>}/>
          <Route path="/sleep/*" element={<SleepPage loggedIn={loggedIn}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
