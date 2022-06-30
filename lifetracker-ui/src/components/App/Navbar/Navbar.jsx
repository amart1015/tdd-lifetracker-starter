import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./Logo/Logo"
import NavLinks from "./NavLinks/NavLinks"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="Navbar">
        <div className="content">
            <Logo/>
            <NavLinks/>
        </div>
        </nav>
  )
}
