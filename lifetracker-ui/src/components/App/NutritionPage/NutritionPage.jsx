import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./NutritionPage.css"
import NutritionOverview from "./NutritionOverview/NutritionOverview"
import NutritionNew from "./NutritionNew/NutritionNew";
import NutritionDetail from "./NutritionDetail/NutritionDetail";

export default function NutritionPage({loggedIn}) {
    const navigate = useNavigate()
    React.useEffect(() => {
        console.log(loggedIn);
        if(!loggedIn){
            navigate("/login")
        }

    }, [loggedIn, navigate])
  return (
    <div className="NutritionPage">
    <div className="Banner"><h1>Nutrition</h1></div>
    <div className="content">
        <Routes>
        <Route path="/" element={<NutritionOverview/>}/>
        <Route path="/create" element={<NutritionNew/>}/>
        {/* <Route path="/id/:nutritionId" element={<NutritionDetail/>}/> */}
        </Routes>
    </div>
</div>
  )
}
