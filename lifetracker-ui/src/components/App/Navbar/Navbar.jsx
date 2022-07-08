import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./Logo/Logo"
import NavLinks from "./NavLinks/NavLinks"
import "./Navbar.css"

export default function Navbar({loggedIn,setLoggedIn, handleLogout}) {
  return (
    <nav className="Navbar">
        <div className="content">
            <Logo/>
            <NavLinks loggedIn={loggedIn} setLoggedIn={setLoggedIn} handleLogout={handleLogout}/>
        </div>
        </nav>
  )
}
