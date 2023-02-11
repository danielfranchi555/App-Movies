import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getMovieDetail} from '../../data'
import {getMovieDetailComming} from '../../data'
import Footer from '../Footer/Footer'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.scss'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer = () => {
  const[movieDetail,setMovieDetail]=useState({})
  const[loading,setLoading]= useState(true)
  const {id} =useParams()

  useEffect(()=>{
    setTimeout(() => {
      
      getMovieDetail(setMovieDetail,id)
      setLoading(false)
    }, 1000);
  },[])

  const getImg = (url)=>{
    let image = `https://image.tmdb.org/t/p/original/${url}`
    return image
}



  useEffect(()=>{
    setTimeout(() => {
       getMovieDetailComming(setMovieDetail,id)
    setLoading(false)
    }, 1000);
   

  },[])

if(loading){
  return    <div className="text-center mt-5">
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
  </div>
}
  return (
   <div className=''  >
    <div className='main-bg-detail' style={{position:'absolute',height:'100vh',width:'100%', filter:'brightness(30%)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:`url(${getImg(movieDetail.backdrop_path)})`}}>
    </div>
    <div className='container' style={{display:'flex',flexDirection:'column',justifyContent:'center',position:'relative'}}>
    <ItemDetail movieDetail={movieDetail} ></ItemDetail>
    </div>
    <div>
          <Footer/>
    </div>
   </div>
  )
}

export default ItemDetailContainer