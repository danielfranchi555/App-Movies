import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import swal from 'sweetalert';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    function autenticacion () {
     swal({
      title: `Welcome ${user.name}`,
      });
    }
   

  return (
    <div className='' style={{color:'white '}}>
        {isAuthenticated &&
             autenticacion()        
        }
            
         
       
    </div>
  )
}

export default Profile