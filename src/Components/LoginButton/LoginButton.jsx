 import React from 'react'
 import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();


  return (
    <div>
        <button className='btn ' style={{backgroundColor:'black',height:'35px',color:'white'}} onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
}

export default LoginButton 