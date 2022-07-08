import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSleepContext } from "../../../../contexts/sleep"
import { useAuthContext } from "../../../../contexts/auth"
import { useNavigate } from "react-router-dom"
import ApiClient from "../../../../services/apiClient"
import "./SleepNew.css"

export default function SleepNew() {
  const {setError, sleeps, setSleeps} = useSleepContext()
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const [form, setForm] = React.useState({
        start_date: "",
        end_date: "",
        user_id: user.id
    })

    const handleOnInputChange = (event) => {

        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
    
    const handleOnSubmit = async () => {
        setError((e) => ({ ...e, form: null }))

        const {data, error} = await ApiClient.createSleep({
                    start_date: form.start,
                    end_date:form.end,
                    user_id: user.id
                })
        console.log(data);
        console.log(error);
        if (error) setError((e) => ({ ...e, form: error }))
        if (data?.sleeps) {
            console.log("hello")
            setSleeps([...sleeps, data.sleep])
            navigate("/sleep")
        }
        
    }
  return (
<div className="SleepNew">
    <h2>Add Sleep</h2>
    <div className="form">
        <div className="InputField"><label forhtml="startTime">Start Time</label><input type="datetime-local" name="startTime" value={form.start} onChange={handleOnInputChange} /></div>
        <div className="InputField"><label forhtml="endTime">End Time</label><input type="datetime-local" name="endTime" value={form.end} onChange={handleOnInputChange}/></div>
        <button className="Button primary large blue" onClick={handleOnSubmit}>Save</button>
    </div>
</div>

  )
}
