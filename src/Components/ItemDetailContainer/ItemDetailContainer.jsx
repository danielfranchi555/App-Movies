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

  const {poster_path,overview,release_date,original_title,original_language} = movieDetail

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
    <div>
        <div className='detail-container' style={{ backgroundImage:`url(${getImg(poster_path)})`}}>

       </div>
  <div className='container' style={{position:'relative'}}>
         <div className='row'>
            <div className="col"style={{display:'flex',justifyContent:'center'}}>
              <div style={{marginTop:'20px'}}>
            <img src={getImg(poster_path)} style={{width:'250px',borderRadius:'20px'}} alt="" />
              </div>
            </div>
            
            <div className="col" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
           
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h2 className='text-center' style={{color:'white'}}>{original_title}</h2>
                 <p style={{color:'white'}}>{release_date}</p>
               </div>
              <div>
                    <p style={{color:'white'}}>{overview}</p>
              </div>
              <div style={{display:'flex',alignItems:'center',}}>
                <div style={{marginRight:'100px'}}>
                  <span style={{color:'white',borderLeft:'solid 3px #005792',padding:'10px'}}>Lenguaje : {original_language}</span></div>
                <div>
                  <button className='btn' style={{backgroundColor:'#005792',color:'white'}}> Watch </button>
                </div>
              </div>
            </div>
         </div>
     </div>
    </div>



  )
}

export default ItemDetailContainer