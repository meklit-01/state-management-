import React from 'react'
import { UserContextProvider } from './assets/context/user-context-provider'
import UserProfile from './UserProfile'
import "./App.css"

function App() {
  return (
    <div>
    <UserContextProvider>
       <UserProfile/>
    </UserContextProvider>
    </div>
  )
}

export default App