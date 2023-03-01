import React from 'react'
import Sidebar from '../Sidebar'
import "./Layout.css"
function Layout ({children}) {
  return (
    <div className='intrix_main'>
        <Sidebar/>
        {children}
    </div>
  )
}

export default Layout 
