import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./NavLinks.css"
import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="links">
        <li>
            <Link to="/activity">Activity</Link>
        </li>
        <li>
            <Link to="/exercise">Exercise</Link>
        </li>
        <li>
            <Link to="/nutrition">Nutrition</Link>
        </li>
        <li>
            <Link to="/sleep">Sleep</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li className="btn secondary">
            <Link to="/register">Sign Up</Link>
        </li>
    </ul>
  )
}
