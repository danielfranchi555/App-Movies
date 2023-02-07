import React from 'react'
import './Item.scss'
const Item = ({item}) => {

    const imgMovie = (url)=>{
     const image = `https://www.themoviedb.org/t/p/w220_and_h330_face/${url}`
     return image
    }


  return (
    <div className='px-5'>
        <img className='px-2' src={imgMovie(item.poster_path)} style={{height:'200px',width:'150px'}}/>
     
    </div>
  )
}

export default Item