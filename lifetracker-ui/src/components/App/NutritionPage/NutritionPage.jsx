import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./NutritionPage.css"
import NutritionOverview from "./NutritionOverview/NutritionOverview"
import NutritionNew from "./NutritionNew/NutritionNew";
import ApiClient from "../../../services/apiClient"
import { useNutritionContext, NutritionContextProvider } from "../../../contexts/nutrition"
import { useAuthContext } from "../../../contexts/auth"
// import NutritionDetail from "./NutritionDetail/NutritionDetail";

export default function NutritionContainer() {
    return (
        <NutritionContextProvider>
            <NutritionPage />
        </NutritionContextProvider>
    )
}

function NutritionPage() {
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const {setError, setNutritions, nutritions} = useNutritionContext()

    React.useEffect(() => {
        if (!user?.email) {
            navigate("/login", {state: {link: "/nutrition"}})
        }
    }, [user, navigate])

    React.useEffect(async () => {
        if (user?.email) { 
            const {data, error} = await ApiClient.fetchUserNutritions()   
            if (error) setError((e) => ({ ...e, nutritions: error }))
    
            if (data?.nutrition) {
                setNutritions(data.nutrition)
            }
        }
    }, [setError, setNutritions])
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
