import React, { useState } from 'react'

function UserProfile() {
const [user , setUser] = useState(null);

const login = () =>{
    setUser({
        name: "one",
        email:"theOne@user.com"
    })
}
const logout = () =>{
    setUser(null)
}
  return (
    <div>
        {user ? (
            <div>
                <p>Welcome, {user.name}!</p>
                <p>Email: {user.email}</p>
                <button onClick={logout}>Logout</button>

            </div>
        ):(
            <div>
                <p>Please Login</p>
                <button onClick={login}>Login</button>
            </div>    
        )
        }
    </div>
  )
}

export default UserProfile