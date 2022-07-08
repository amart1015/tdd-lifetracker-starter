import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./NutritionCard.css"
import { Link } from "react-router-dom";
import moment from "moment"


export default function NutritionCard({nutritions}) {
    const date = nutritions.created_at.split("T")[0].split("-")
    return (
    <div className="NutritionCard">
        <div className="card-header">
            <img
                src={nutritions.image_url}
                alt="nutrition"
            />
            <h2 className="title">{nutritions.name}</h2>
        </div>
        <div className="card-stats">
            <div className="CardStat">
                <p>Calories</p>
                <span>{nutritions.calories}</span>
            </div>
            <div className="CardStat">
                <p>Quantity</p>
                <span>{nutritions.quantity}</span>
            </div>
        </div>
        <div className="card-meta"><small>{moment(new Date(nutritions.created_at)).calendar()}</small><small className="category">{nutritions.category}</small></div>
    </div>


  )
}
