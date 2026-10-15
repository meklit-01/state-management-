import React, { useContext } from 'react'
import { userContext } from './assets/context/user-context-provider'

function UserProfile() {
const {user, login, logout} = useContext(userContext);


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