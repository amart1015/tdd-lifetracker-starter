import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./SleepPage.css"
import SleepOverview from "./SleepOverview/SleepOverview"
import SleepNew from "./SleepNew/SleepNew";
import ApiClient from "../../../services/apiClient"
import { useSleepContext, SleepContextProvider } from "../../../contexts/sleep"
import { useAuthContext } from "../../../contexts/auth"
// import SleepDetail from "./SleepDetail/SleepDetail";

export default function SleepContainer() {
    return (
        <SleepContextProvider>
            <SleepPage />
        </SleepContextProvider>
    )
}

function SleepPage() {
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const {setError, setSleeps, sleeps} = useSleepContext()

    React.useEffect(() => {
        if (!user?.email) {
            navigate("/login", {state: {link: "/sleep"}})
        }
    }, [user, navigate])

    React.useEffect(async () => {
        if (user?.email) { 
            const {data, error} = await ApiClient.fetchUserSleeps()   
            if (error) setError((e) => ({ ...e, sleeps: error }))
    
            if (data?.sleep) {
                setSleeps(data.sleep)
            }
        }
    }, [setError, setSleeps])
  return (
    <div className="SleepPage">
    <div className="Banner"><h1>Sleep</h1></div>
    <div className="content">
        <Routes>
        <Route path="/" element={<SleepOverview/>}/>
        <Route path="/create" element={<SleepNew/>}/>
        {/* <Route path="/id/:sleepId" element={<SleepDetail/>}/> */}
        </Routes>
    </div>
</div>
  )
}
