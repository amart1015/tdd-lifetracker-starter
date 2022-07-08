import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./NutritionOverview.css"
import NutritionFeed from "./NutritionFeed/NutritionFeed";
import { Link } from "react-router-dom";
import { useNutritionContext } from "../../../../contexts/nutrition"


export default function NutritionOverview() {
const {nutritions} = useNutritionContext()
console.log(nutritions)
return (
<div className="NutritionOverview">
    <div className="header">
        <h3>Overview</h3>
        <button className="Button outline small outline aqua"><Link to="/nutrition/create">Record Nutrition</Link></button>
    </div>
    <div className="feed">
        {!nutritions.length? 
        <div className="empty"><h2>Nothing here yet.</h2></div>:
        <NutritionFeed/>}
        </div>
</div>

  )
}
