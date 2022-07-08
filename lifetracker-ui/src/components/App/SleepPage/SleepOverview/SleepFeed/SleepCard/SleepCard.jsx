import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./SleepCard.css"
import { Link } from "react-router-dom";
import moment from "moment"



export default function SleepCard({sleeps}) {
    const date = new Date(sleeps.created_at.split("T")[0]).toDateString().split(" ")
    const start = sleeps.start_date.split("T")[1].split(":")
    const end = sleeps.end_date.split("T")[1].split(":")

    const nth = function(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }
    return (
    <div className="SleepCard">
        <div className="card-header"><h2 className="title">{`${date[1]} ${parseInt(date[2])}${nth(parseInt(date[2]))} ${date[3]}`}</h2></div>
        <div className="card-stats">
            <div className="CardStat">
                <p>Start Time</p>
                <span>{start[0] >= 12 ? `${parseInt(start[0]) - 12}:${start[1]} PM` : `${start[0]}:${start[1]} AM`}</span>
            </div>
            <div className="CardStat">
                <p>End Time</p>
                <span>{end[0] >= 12 ? `${parseInt(end[0]) - 12}:${end[1]} PM` : `${end[0]}:${end[1]} AM`}</span>
            </div>
        </div>
        <div className="card-meta"><small>13 hours</small></div>
    </div>



  )
}
