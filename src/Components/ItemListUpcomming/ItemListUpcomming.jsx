import React, { useEffect, useState } from 'react'
import {getApiUpcomming} from '../../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const ItemListUpcomming = () => {
    const[newData,setNewData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
     
        setLoading(true)
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
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    
        // customPaging: function (i) {
        //   return <p>{i + 1}</p>;
        // },
    
        responsive: [
          {
            breakpoint: 1424,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
    
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
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
               <div>
              
           
              <div>

                <img src={imgMovie(item.poster_path)} style={{height:'200px',width:'150px',border:'solid 1px white'}} />
              </div>
            
              
               </div>
            
                ))}
        </Slider>
    </div>
  )
}

export default ItemListUpcomming