import React, { useEffect, useState } from "react";
import app from './base'
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUder] = useState(null)
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUder);
    }, [])
    return (
        <AuthContext.Provider
            value={
                { currentUser }
            }>
            {children}
        </AuthContext.Provider>
    )
}
