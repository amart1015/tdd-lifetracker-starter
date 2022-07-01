import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./SleepNew.css"

export default function SleepNew() {
  return (
<div class="SleepNew">
    <h2>Add Sleep</h2>
    <div class="form">
        <div class="InputField"><label for="startTime">Start Time</label><input type="datetime-local" name="startTime" value="" /></div>
        <div class="InputField"><label for="endTime">End Time</label><input type="datetime-local" name="endTime" value="" /></div>
        <button class="Button primary large blue">Save</button>
    </div>
</div>

  )
}
