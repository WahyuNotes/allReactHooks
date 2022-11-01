import React, { useState, createContext } from 'react'
import Login from '../component/Login'
import User from '../component/User'

export const AppContext = createContext(null);//buat export fungsi contextnya

const Context = () => {
    const [username, setUsername] = useState("");//untuk storenya

    return (
        <AppContext.Provider value={{ username, setUsername }}>{/*untuk ngepassing state/value */}
            <Login />
            <User />
        </AppContext.Provider>
    )
}

export default Context