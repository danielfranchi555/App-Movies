import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'
import { useAuth0 } from '@auth0/auth0-react';

const Item = ({item}) => {
  const {isAuthenticated} = useAuth0()

    const imgMovie = (url)=>{
     const image = `https://www.themoviedb.org/t/p/w220_and_h330_face/${url}`
     return image
    }
 
    const noLink = ()=>{
       alert('no estas registrado')
    }

  return (
    <div className='card-item'>
      {isAuthenticated?
       <Link to={`/detalle/${item.id}}`}>
        <img className='px-2 img-list ' src={imgMovie(item.poster_path)} />      
      </Link>:
         <Link onClick={()=>noLink()}>
         <img className='px-2 img-list ' src={imgMovie(item.poster_path)} />      
       </Link>
      }
     
    </div>
  )
}

export default Item