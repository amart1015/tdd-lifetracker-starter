import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm/RegistrationForm"
import "./RegistrationPage.css"

export default function RegistrationPage({setAppState, setLoggedIn}) {
  return (
    <div className="registration-page">
        <RegistrationForm setAppState={setAppState} setLoggedIn={setLoggedIn}/>
    </div>
  )
}
