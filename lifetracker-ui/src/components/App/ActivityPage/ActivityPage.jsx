import * as React from "react"
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import "./ActivityPage.css"

export default function ActivityPage({loggedIn}) {
    const navigate = useNavigate()
    React.useEffect(() => {
        console.log(loggedIn);
        if(!loggedIn){
            navigate("/login")
        }

    }, [loggedIn, navigate])
    
  return (
    <div className="ActivityPage">
   <div className="content">
      <div className="actions">
         <h2 className="heading">Activity Feed</h2>
         <div className="buttons"><button className="Button outline small outline gold "><Link to="/exercise/create">Add Exercise</Link></button><button className="Button outline small outline blue "><Link to="/sleep/create">Log Sleep</Link></button><button className="Button outline small outline aqua "><Link to="/nutrition/create">Record Nutrition</Link></button></div>
      </div>
      <div className="stats">
         <div className="main">
            <div className="SummaryStat large gold">
               <div className="background">
                  <p>Total Exercise Minutes</p>
                  <h1>0</h1>
                  {/* <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                     <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                  </svg> */}
               </div>
            </div>
            <div className="SummaryStat large purple">
               <div className="background">
                  <p>Avg Sleep Hours</p>
                  <h1>0</h1>
                  {/* <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                     <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                  </svg> */}
               </div>
            </div>
            <div className="SummaryStat large aqua">
               <div className="background">
                  <p>Avg Daily Calories</p>
                  <h1>0</h1>
                  {/* <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                     <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                  </svg> */}
               </div>
            </div>
         </div>
         <h4>More Stats</h4>
         <div className="more">
            <div className="SummaryStat small teal">
               <div className="background">
                  <p>Maximum Hourly Calories</p>
                  <h1>0</h1>
                  {/* <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                     <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                  </svg> */}
               </div>
            </div>
            <div className="SummaryStat small orange">
               <div className="background">
                  <p>Avg Exercise Intensity</p>
                  <h1>0</h1>
                  {/* <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                     <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                  </svg> */}
               </div>
            </div>
            <div className="SummaryStat small red">
               <div className="background">
                  <p>Total Hours Slept</p>
                  <h1>0</h1>
                  {/* <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                     <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                  </svg> */}
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

  )
}
