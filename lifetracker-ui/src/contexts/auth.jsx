import { createContext, useState, useContext } from "react"

const AuthContext = createContext(null)

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [initialized, setInitialized] = useState(false)
    const [error, setError] = useState({})

    const authValue = {user, setUser, error, setError, initialized, setInitialized}
    return (
        <AuthContext.Provider value ={authValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)