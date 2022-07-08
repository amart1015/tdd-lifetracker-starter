import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useExerciseContext } from "../../../../contexts/exercise"
import { useAuthContext } from "../../../../contexts/auth"
import { useNavigate } from "react-router-dom"
import ApiClient from "../../../../services/apiClient"
import "./ExerciseNew.css"

export default function ExerciseNew() {
  const {setError, exercises, setExercises} = useExerciseContext()
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const [form, setForm] = React.useState({
        name: "",
        category: "",
        user_id: user.id,
        duration: 1,
        intensity: 1
    })

    const handleOnInputChange = (event) => {

        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
    
    const handleOnSubmit = async () => {
        setError((e) => ({ ...e, form: null }))

        const {data, error} = await ApiClient.createExercise({
                    name: form.name,
                    category: form.category,
                    duration: form.duration,
                    intensity: form.intensity,
                    user_id: user.id,
                })
        if (error) setError((e) => ({ ...e, form: error }))
        if (data?.exercise) {
            setExercises([...exercises, data.exercise])
            navigate("/exercise")
        }
        
    }
  return (
<div className="ExerciseNew">
    <h2>Add Exercise</h2>
    <div className="form">
        <div className="InputField"><label htmlFor="name">Name</label><input type="text" name="name" placeholder="Exercise name" value={form.name} onChange={handleOnInputChange}/></div>
        <div className="InputField"><label htmlFor="category">Category</label><input type="text" name="category" placeholder="Exercise category" value={form.category} onChange={handleOnInputChange}/></div>
        <div className="split-input-field">
            <div className="InputField"><label htmlFor="duration">Duration (min)</label><input type="number" name="duration" min="1" max="100000000" value={form.duration} onChange={handleOnInputChange}/></div>
            <div className="InputField"><label htmlFor="intensity">Intensity (1-10)</label><input type="number" name="intensity" min="0" max="10" value={form.intensity} onChange={handleOnInputChange}/></div>
        </div>
        <button className="Button primary large gold" onClick={handleOnSubmit}>Save</button>
    </div>
</div>



  )
}
