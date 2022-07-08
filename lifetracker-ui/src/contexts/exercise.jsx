import { createContext, useState, useContext } from "react"

const ExerciseContext = createContext(null)

export const ExerciseContextProvider = ({children}) => {
    const [exercises, setExercises] = useState([])
    const [error, setError] = useState({})

    const exerciseValue = {exercises, setExercises, error, setError}
    return (
        <ExerciseContext.Provider value ={exerciseValue}>
            <>{children}</>
        </ExerciseContext.Provider>
    )
}

export const useExerciseContext = () => useContext(ExerciseContext)


