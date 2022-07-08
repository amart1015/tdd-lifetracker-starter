import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./ExerciseCard.css"
import { Link } from "react-router-dom";
import moment from "moment"


export default function ExerciseCard({exercises}) {
    const date = exercises.created_at.split("T")[0].split("-")
    return (
    <div className="ExerciseCard">
    <div className="card-header"><h2 className="title">{exercises.name}</h2></div>
    <div className="card-stats">
        <div className="CardStat">
            <p>Duration</p>
            <span>{exercises.duration}</span>
        </div>
        <div className="CardStat">
            <p>Intensity</p>
            <span>{exercises.intensity}</span>
        </div>
    </div>
    <div className="card-meta"><small>{moment(new Date(exercises.created_at)).calendar()}</small><small className="category">{exercises.category}</small></div>
</div>

    


  )
}
