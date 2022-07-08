import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { useAuthContext } from "../../../../contexts/auth"
import ApiClient from "../../../../services/apiClient"
import axios from "axios"
import "./LoginForm.css"

export default function LoginForm({setLoggedIn}) {
  const navigate = useNavigate()
  const location= useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const {user, setUser, error, setError} = useAuthContext()
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  const link = location?.state?.link ? location?.state?.link : "/activity"

  React.useEffect(() => {
    if (user?.email) {
        navigate(link)
        setLoggedIn(true)
    }
}, [user, navigate])

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setErrors((e) => ({ ...e, form: null }))

    const {data, error} = await ApiClient.loginUser({
        email: form.email,
        password: form.password,
    })
    
    if (error) setError((e) => ({ ...e, form: error }))

    if (data?.user) {
        ApiClient.setToken(data.token)
        setUser(data.user)
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
