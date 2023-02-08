import React from 'react'
import { useAuth0  } from '@auth0/auth0-react'
const LogoutButton = () => {
       const{logout}= useAuth0()
  return (
    <div className=''>
        <button className='btn '  style={{backgroundColor:'#a2c11c'}} onClick={()=>logout()}>log Out</button>
    </div>
  )
}

export default LogoutButton