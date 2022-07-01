import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./NutritionNew.css"

export default function NutritionNew() {
  return (
<div className="NutritionNew">
    <h2>Record Nutrition</h2>
    <div className="form">
        <div className="InputField"><label for="name">Name</label><input type="text" name="name" placeholder="Nutrition name" value="" /></div>
        <div className="InputField"><label for="category">Category</label><input type="text" name="category" placeholder="Nutrition category" value="" /></div>
        <div className="split-input-field">
            <div className="InputField"><label for="quantity">Quantity</label><input type="number" name="quantity" min="1" max="100000000" value="1" /></div>
            <div className="InputField"><label for="calories">Calories</label><input type="number" name="calories" min="0" max="10000000000" step="10" value="1" /></div>
        </div>
        <div className="InputField"><label for="imageUrl">Image URL</label><input type="text" name="imageUrl" placeholder="http://www.food-image.com/1" value="" /></div>
        <button className="Button primary large aqua">Save</button>
    </div>
</div>


  )
}
