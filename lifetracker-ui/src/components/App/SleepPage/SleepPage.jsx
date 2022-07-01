import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./SleepPage.css"
import SleepOverview from "./SleepOverview/SleepOverview"
import SleepNew from "./SleepNew/SleepNew";

export default function SleepPage({loggedIn}) {
    const navigate = useNavigate()
    React.useEffect(() => {
        console.log(loggedIn);
        if(!loggedIn){
            navigate("/login")
        }

    }, [loggedIn, navigate])
  return (
    <div className="SleepPage">
    <div className="Banner"><h1>Sleep</h1></div>
    <div className="content">
        <Routes>
        <Route path="/" element={<SleepOverview/>}/>
        <Route path="/create" element={<SleepNew/>}/>
        </Routes>
    </div>
</div>
  )
}
