import React, { createContext, useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
// import Check from './components/check'
import UserContext from './context/UserContext'

const App = () => {
  // const {names} = useContext(UserContext)
  // console.log(names);
  return (
    <div>
      <Navbar/>
      {/* <Check title = 'hello world'/> */}
      {/* <Check>Hello World</Check> */}
    </div>
  )
}

export default App
