import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./ExerciseFeed.css"
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import { Link } from "react-router-dom";
import { useExerciseContext, ExerciseContextProvider } from "../../../../../contexts/exercise"


export default function ExerciseFeed() {
  const {exercises} = useExerciseContext()
return (
<div className="ExerciseFeed">
  {exercises.length &&
  (exercises?.map((exercise)=> {
    return <ExerciseCard exercises={exercise} key={exercise.id}/>
  }))}
    
</div>


  )
}
