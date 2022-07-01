import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./ExerciseNew.css"

export default function ExerciseNew() {
  return (
<div class="ExerciseNew">
    <h2>Add Exercise</h2>
    <div class="form">
        <div class="InputField"><label for="name">Name</label><input type="text" name="name" placeholder="Exercise name" value="" /></div>
        <div class="InputField"><label for="category">Category</label><input type="text" name="category" placeholder="Exercise category" value="" /></div>
        <div class="split-input-field">
            <div class="InputField"><label for="duration">Duration (min)</label><input type="number" name="duration" min="1" max="100000000" value="1" /></div>
            <div class="InputField"><label for="intensity">Intensity (1-10)</label><input type="number" name="intensity" min="0" max="10" value="1" /></div>
        </div>
        <button class="Button primary large gold">Save</button>
    </div>
</div>



  )
}
