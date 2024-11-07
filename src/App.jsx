import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  
const[openSidebarToggle,setOpenSidebarToggle]=useState(false)

  const OpenSidebar=() => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    
    <div className='grid-container'>
    <Sidebar OpenSidebar={!OpenSidebar}/>
    <Home />
    <Header openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    </div>
    
    
  )
}

export default App
