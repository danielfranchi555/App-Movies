import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getMovieDetail} from '../../data'
import {getMovieDetailComming} from '../../data'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemDetailContainer = () => {
  const[movieDetail,setMovieDetail]=useState({})
  const {id} =useParams()

  useEffect(()=>{
    getMovieDetail(setMovieDetail,id)
  },[])

  useEffect(()=>{
    getMovieDetailComming(setMovieDetail,id)
  },[])
  return (
    <div className='text-center py-5 mt-5' style={{color:'white'}}>
      <ItemDetail movieDetail={movieDetail} ></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer