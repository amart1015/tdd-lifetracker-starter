import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./SleepOverview.css"
import SleepFeed from "./SleepFeed/SleepFeed"
import { Link } from "react-router-dom"
import { useSleepContext } from "../../../../contexts/sleep"


export default function SleepOverview() {
  const {sleeps} = useSleepContext()
console.log(sleeps)
  return (
<div className="SleepOverview">
    <div className="header">
        <h3>Overview</h3>
        <button className="Button outline small outline aqua"><Link to="/sleep/create">Log Sleep</Link></button>
    </div>
    <div className="feed">
    {!sleeps.length? 
        <div className="empty"><h2>Nothing here yet.</h2></div>:
        <SleepFeed/>}
    </div>
</div>

  )
}
