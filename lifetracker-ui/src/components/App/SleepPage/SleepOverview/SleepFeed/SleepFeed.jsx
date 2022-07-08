import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./SleepFeed.css"
import SleepCard from "./SleepCard/SleepCard";
import { Link } from "react-router-dom";
import { useSleepContext, SleepContextProvider } from "../../../../../contexts/sleep"


export default function SleepFeed() {
  const {sleeps} = useSleepContext()
return (
<div className="SleepFeed">
  {sleeps.length &&
  (sleeps?.map((sleep)=> {
    return <SleepCard sleeps={sleep} key={sleep.id}/>
  }))}
    
</div>


  )
}
