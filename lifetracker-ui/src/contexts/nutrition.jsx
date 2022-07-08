import { createContext, useState, useContext } from "react"

const NutritionContext = createContext(null)

export const NutritionContextProvider = ({children}) => {
    const [nutritions, setNutritions] = useState([])
    const [error, setError] = useState({})

    const nutritionValue = {nutritions, setNutritions, error, setError}
    return (
        <NutritionContext.Provider value ={nutritionValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )
}

export const useNutritionContext = () => useContext(NutritionContext)


