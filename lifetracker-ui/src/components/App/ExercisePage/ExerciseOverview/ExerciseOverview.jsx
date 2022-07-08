import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./ExerciseOverview.css"
import { Link } from "react-router-dom";
import { useExerciseContext } from "../../../../contexts/exercise"
import ExerciseFeed from "./ExerciseFeed/ExerciseFeed";

export default function ExerciseOverview() {
  const {exercises} = useExerciseContext()
  return (
<div className="ExerciseOverview">
    <div className="header">
        <h3>Overview</h3>
        <button className="Button outline small outline aqua"><Link to="/exercise/create">Add Exercise</Link></button>
    </div>
    <div className="feed">
    {!exercises.length? 
        <div className="empty"><h2>Nothing here yet.</h2></div>:
        <ExerciseFeed/>}
    </div>
</div>

  )
}
