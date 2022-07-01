import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./ExercisePage.css"
import ExerciseOverview from "./ExerciseOverview/ExerciseOverview"
import ExerciseNew from "./ExerciseNew/ExerciseNew";

export default function ExercisePage({loggedIn}) {
    const navigate = useNavigate()
    React.useEffect(() => {
        console.log(loggedIn);
        if(!loggedIn){
            navigate("/login")
        }

    }, [loggedIn, navigate])
  return (
    <div className="ExercisePage">
    <div className="Banner"><h1>Exercise</h1></div>
    <div className="content">
        <Routes>
        <Route path="/" element={<ExerciseOverview/>}/>
        <Route path="/create" element={<ExerciseNew/>}/>
        </Routes>
    </div>
</div>
  )
}
