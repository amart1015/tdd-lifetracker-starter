import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import "./RegistrationForm.css"

export default function RegistrationForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        userName:""
    })

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


  return (
    <div className="registration-form">
            <div className="card">
                <h2>Sign Up</h2>
                <div className="form-input">
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Enter a valid email" value={form.email} onChange={handleOnInputChange}/>
                        {(errors.email !== null && form.email !== "") ? <span className="error">Please enter a valid email.</span> : null}


                    </div>
                    <div className="input-field">
                        <label for="username">Username</label>
                        <input type="text" name="username" placeholder="your_username" value={form.userName} onChange={handleOnInputChange}/>
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
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Enter a secure password" value={form.password} onChange={handleOnInputChange}/>
                    </div>
                    <div className="input-field">
                        <label for="passwordConfirm">Confirm Password</label>
                        <input type="password" name="passwordConfirm" placeholder="Confirm your password" value={form.passwordConfirm} onChange={handleOnInputChange}/>
                        {(errors.passwordConfirm !== null && form.passwordConfirm !== "") ? <span className="error">Password's do not match</span> : null}
                    </div>
                    <button className="btn">Create Account</button>
                </div>
                <div className="footer">
                    <p>Already have an account? Login <a href="/login">here</a></p>
                </div>
            </div>
    </div>
  )
}
