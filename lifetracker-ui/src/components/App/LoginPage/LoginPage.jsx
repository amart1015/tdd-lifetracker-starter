import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm"
import "./LoginPage.css"

export default function LoginPage({setLoggedIn}) {
  return (
    <div className="login-page">
        <LoginForm setLoggedIn={setLoggedIn}/>
    </div>
  )
}
