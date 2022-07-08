import * as React from "react"
import "./NavLinks.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../../contexts/auth"

export default function NavLinks({loggedIn,setLoggedIn, handleLogout}) {
    const navigate = useNavigate()
    const {user} = useAuthContext()

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
        {loggedIn ? <li>
            <Link onClick={handleLogout} to="/">Logout</Link>
        </li>:<li>
            <Link to="/login">Login</Link>
        </li>}
        {!loggedIn && <li className="btn secondary">
            <Link to="/register">Sign Up</Link>
        </li>}
    </ul>
  )
}
