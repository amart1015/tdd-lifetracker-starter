import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./NotFound.css"

export default function NotFound() {
  return (
    <div className="NotFound">
        <div className="cta">
            <h1>404</h1>
            <p>That page does not exist</p>
        </div>
    </div>
  )
}
