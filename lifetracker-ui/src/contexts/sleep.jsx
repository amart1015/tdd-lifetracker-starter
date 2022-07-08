import { createContext, useState, useContext } from "react"

const SleepContext = createContext(null)

export const SleepContextProvider = ({children}) => {
    const [sleeps, setSleeps] = useState([])
    const [error, setError] = useState({})

    const sleepValue = {sleeps, setSleeps, error, setError}
    return (
        <SleepContext.Provider value ={sleepValue}>
            <>{children}</>
        </SleepContext.Provider>
    )
}

export const useSleepContext = () => useContext(SleepContext)


