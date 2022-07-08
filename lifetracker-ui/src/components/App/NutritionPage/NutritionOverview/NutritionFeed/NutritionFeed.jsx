import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./NutritionFeed.css"
import NutritionCard from "./NutritionCard/NutritionCard";
import { Link } from "react-router-dom";
import { useNutritionContext, NutritionContextProvider } from "../../../../../contexts/nutrition"


export default function NutritionFeed() {
  const {nutritions} = useNutritionContext()
return (
<div className="NutritionFeed">
  {nutritions.length &&
  (nutritions?.map((nutrition)=> {
    return <NutritionCard nutritions={nutrition} key={nutrition.id}/>
  }))}
    
</div>


  )
}
