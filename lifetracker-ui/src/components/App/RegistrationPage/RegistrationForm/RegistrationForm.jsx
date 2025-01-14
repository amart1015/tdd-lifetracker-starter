import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import ApiClient from "../../../../services/apiClient"
import { useAuthContext } from "../../../../contexts/auth"
import axios from "axios"
import "./RegistrationForm.css"

export default function RegistrationForm({setAppState,setLoggedIn}) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const {user, setUser, error, setError} = useAuthContext()
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        userName:"",
    })
    React.useEffect(() => {
      if (user?.email) {
          navigate("/activity")
          setLoggedIn(true)
      }
  }, [user, navigate])

    const handleOnInputChange = (event) => {
        if (event.target.name === "password") {
          if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "passwordConfirm") {
          if (form.password && form.password !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

      const handleOnSubmit = async (e) => {
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null }))
    
        if (form.passwordConfirm !== form.password) {
          setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
          setIsLoading(false)
          return
        } else {
          setErrors((e) => ({ ...e, passwordConfirm: null }))
        }
        const {data,error} = await ApiClient.signupUser( {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          userName:form.userName
        })

        if (error) setErrors((e) => ({ ...e, form: error }))

        if (data?.user) {
          ApiClient.setToken(data.token)
          setUser(data.user)
      }
      }


  return (
    <div className="registration-form">
            <div className="card">
                <h2>Sign Up</h2>
                {errors.form && <span className="error">{errors.form}</span>}
                <div className="form-input">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter a valid email" value={form.email} onChange={handleOnInputChange}/>
                        {(errors.email !== null && form.email !== "") ? <span className="error">Please enter a valid email.</span> : null}


                    </div>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="userName" placeholder="your_username" value={form.userName} onChange={handleOnInputChange}/>
                    </div>
                    <div className="split-input-field">
                        <div className="input-field">
                            <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleOnInputChange}/>
                        </div>
                        <div className="input-field">
                            <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleOnInputChange}/>
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter a secure password" value={form.password} onChange={handleOnInputChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="password" name="passwordConfirm" placeholder="Confirm your password" value={form.passwordConfirm} onChange={handleOnInputChange}/>
                        {(errors.passwordConfirm !== null && form.passwordConfirm !== "") ? <span className="error">Password's do not match</span> : null}
                    </div>
                    <button className="btn" onClick={handleOnSubmit}>Create Account</button>
                </div>
                <div className="footer">
                    <p>Already have an account? Login <a href="/login">here</a></p>
                </div>
            </div>
    </div>
  )
}
