import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Navbar = () => {
  const { isUser, setIsUser } = useContext(UserContext)
  // console.log(isUser);
  return (
    <div>

      <ul style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'blue', color: 'white', padding: '15px', fontFamily: 'sans-serif' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {!isUser ? <div>  <li onClick={() => setIsUser(true)} >Login</li>
          <li>Register</li></div> : <li onClick={() => setIsUser(false)} >Logout</li>}
      </ul>

    </div>
  )
}

export default Navbar
