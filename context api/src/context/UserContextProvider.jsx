import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
  // const names = 'Owais'
  const [isUser, setIsUser] = useState(false)
  return (
    <UserContext.Provider value={{ isUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
