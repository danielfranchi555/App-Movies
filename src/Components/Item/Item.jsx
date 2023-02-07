import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'
const Item = ({item}) => {

    const imgMovie = (url)=>{
     const image = `https://www.themoviedb.org/t/p/w220_and_h330_face/${url}`
     return image
    }


  return (
    <div className='card-item'>
      <Link to={'/detalle'}>
        <img className='px-2 img-list ' src={imgMovie(item.poster_path)} />      
      </Link>
     
    </div>
  )
}

export default Item