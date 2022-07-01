import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./NutritionOverview.css"
import { Link } from "react-router-dom";

export default function NutritionOverview() {
  return (
<div className="NutritionOverview">
    <div className="header">
        <h3>Overview</h3>
        <button className="Button outline small outline aqua"><Link to="/nutrition/create">Record Nutrition</Link></button>
    </div>
    <div className="feed">
        <div className="empty"><h2>Nothing here yet.</h2></div>
    </div>
</div>

  )
}
