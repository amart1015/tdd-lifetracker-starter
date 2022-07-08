import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNutritionContext } from "../../../../contexts/nutrition"
import { useAuthContext } from "../../../../contexts/auth"
import { useNavigate } from "react-router-dom"
import ApiClient from "../../../../services/apiClient"
import "./NutritionNew.css"

export default function NutritionNew() {
  const {setError, nutritions, setNutritions} = useNutritionContext()
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const [form, setForm] = React.useState({
        name: "",
        category: "",
        user_id: user.id,
        quantity: 0,
        calories: 0,
        image_url: ""
    })

    const handleOnInputChange = (event) => {

        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
    
    const handleOnSubmit = async () => {
        setError((e) => ({ ...e, form: null }))

        const {data, error} = await ApiClient.createNutrition({
                    name: form.name,
                    category: form.category,
                    calories: form.calories,
                    image_url: form.imageUrl,
                    user_id: user.id,
                    quantity: form.quantity,
                })
        console.log(data);
        console.log(error);
        if (error) setError((e) => ({ ...e, form: error }))
        if (data?.nutrition) {
            console.log("hello")
            setNutritions([...nutritions, data.nutrition])
            navigate("/nutrition")
        }
        
    }

  return (
<div className="NutritionNew">
    <h2>Record Nutrition</h2>
    <div className="form">
        <div className="InputField"><label htmlFor="name">Name</label><input type="text" name="name" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChange}/></div>
        <div className="InputField"><label htmlFor="category">Category</label><input type="text" name="category" placeholder="Nutrition category" value={form.category} onChange={handleOnInputChange}/></div>
        <div className="split-input-field">
            <div className="InputField"><label htmlFor="quantity">Quantity</label><input type="number" name="quantity" min="1" max="100000000" value={form.quantity} onChange={handleOnInputChange}/></div>
            <div className="InputField"><label htmlFor="calories">Calories</label><input type="number" name="calories" min="0" max="10000000000" step="10" value={form.calories} onChange={handleOnInputChange}/></div>
        </div>
        <div className="InputField"><label htmlFor="imageUrl">Image URL</label><input type="text" name="imageUrl" placeholder="http://www.food-image.com/1" value={form.imageUrl} onChange={handleOnInputChange}/></div>
        <button className="Button primary large aqua" onClick={handleOnSubmit}>Save</button>
    </div>
</div>


  )
}
