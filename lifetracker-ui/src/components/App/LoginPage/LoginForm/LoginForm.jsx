import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./LoginForm.css"

export default function LoginForm({setLoggedIn}) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const res = await axios.post(`http://localhost:3001/auth/login`, form)
      if (res?.data) {
        setIsLoading(false)
        setLoggedIn(true)
        navigate("/activity")
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  }

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }
  return (
    <div className="login-form">
      <div className="card">
        <h2>Login</h2>
        {errors.form && <span className="error">{errors.form}</span>}
            <div className="form-input">
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="user@gmail.com" value={form.email} onChange={handleOnInputChange}/>
                    {(errors.email !== null && form.email !== "") ? <span className="error">Please enter a valid email.</span> : null}
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" value={form.password} onChange={handleOnInputChange}/>
                </div>
                <button className="btn" onClick={handleOnSubmit}>Login</button>
            <div className="footer">
                <p>Don't have an account? Sign up <a href="/register">here.</a></p>
            </div>
            </div>
        </div>
    </div>
  )
}
