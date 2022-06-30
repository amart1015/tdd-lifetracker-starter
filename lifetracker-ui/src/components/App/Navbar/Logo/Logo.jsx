import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Logo.css"
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
        <Link to="/"><img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="logo"/></Link>
    </div>
  )
}
