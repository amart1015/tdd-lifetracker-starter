import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./ExercisePage.css"
import ExerciseOverview from "./ExerciseOverview/ExerciseOverview"
import ExerciseNew from "./ExerciseNew/ExerciseNew"
import ApiClient from "../../../services/apiClient"
import { useExerciseContext, ExerciseContextProvider } from "../../../contexts/exercise"
import { useAuthContext } from "../../../contexts/auth"

export default function ExerciseContainer() {
  return (
      <ExerciseContextProvider>
          <ExercisePage />
      </ExerciseContextProvider>
  )
}
function ExercisePage({loggedIn}) {
  const {user} = useAuthContext()
  const navigate = useNavigate()
  const {setError, setExercises, exercises} = useExerciseContext()

  React.useEffect(() => {
      if (!user?.email) {
          navigate("/login", {state: {link: "/exercise"}})
      }
  }, [user, navigate])

  React.useEffect(async () => {
      if (user?.email) { 
          const {data, error} = await ApiClient.fetchUserExercises()   
          if (error) setError((e) => ({ ...e, exercises: error }))
  
          if (data?.exercise) {
              setExercises(data.exercise)
          }
      }
  }, [setError, setExercises])
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
