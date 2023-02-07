import React from 'react'

const ItemDetail = ({movieDetail}) => {

   const getImg = (url)=>{
        let image = `https://image.tmdb.org/t/p/original/${url}`
        return image
   }

  return (
    <div>
        <img src={getImg(movieDetail.backdrop_path)} className='w-25'></img>
        <h1>{movieDetail.title}</h1>
        <span>{movieDetail.release_date}</span>
        <p>{movieDetail.overview}</p>
    </div>
  )
}

export default ItemDetail