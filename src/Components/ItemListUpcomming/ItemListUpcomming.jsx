import React, { useEffect, useState } from 'react'
import {getApiUpcomming} from '../../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './ItemListUpcomming.scss'

const ItemListUpcomming = () => {
    const[newData,setNewData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
     
          getApiUpcomming(setNewData)
   setLoading(false)
 
    },[])
    const imgMovie = (url)=>{
        const image = `https://www.themoviedb.org/t/p/w220_and_h330_face/${url}`
        return image
       }
       const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
    

        responsive: [
          {
            breakpoint: 1424,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
    
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              initialSlide: 1,
            },
          },
       
        ],}
 if(loading){
  return <h1 style={{color:'white'}} className='text-center'>loading</h1>
 }
  return (
    <div className=''>
        <span style={{color:'white'}}>movie upcomming</span>
        <Slider {...settings}>
        {newData.map((item)=>(
               <div className=''>
              
            <Link to={'/detalle'}>
             <div className='card-item'>
                <img className='px-2' src={imgMovie(item.poster_path)} style={{height:'200px',width:'150px',margin:''}} />
              </div>
            </Link>
             
            
              
               </div>
            
                ))}
        </Slider>
    </div>
  )
}

export default ItemListUpcomming