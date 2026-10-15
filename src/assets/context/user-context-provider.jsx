import React, { createContext, useState } from 'react'

export const userContext = createContext();

// we pass the prop children because we will the wrap this component around other components 
export const UserContextProvider = ({ children })=>{

    const [user, setUser] = useState(null);
    const login = () =>{
    setUser({
        name: "one",
        email:"theOne@user.com"
    })
}
const logout = () =>{
    setUser(null)
} 
const contextValue ={
    user,
    login,
    logout
}
    return <userContext.Provider value={contextValue}>{children}</userContext.Provider>;
}

