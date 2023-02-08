import React, { useEffect, useState } from 'react'
import {getMovieDetailTop} from '../../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";




const ItemListTop = () => {
 const [data,setData]= useState([])
 const { isAuthenticated, user } = useAuth0();


 const imgMovie = (url)=>{
    let img
   return  img = `https://image.tmdb.org/t/p/original${url}`
 }
 useEffect(()=>{
    getMovieDetailTop(setData)
 },[])

 const noLink = () => {
    alert('no estas registrado')
  };
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
        ],
      };
  return (
    <div className='py-3 container'>
        <p style={{color:'white',marginBottom:'10px'}}> top rated</p>
          <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="container">
            {isAuthenticated?
               <Link to={`/detalle/${item.id}`}>
              <div className="card-item">
                <img
                  className="px-2"
                  src={imgMovie(item.poster_path)}
                  style={{ height: "200px", width: "150px", margin: "" }}
                />
              </div>
            </Link>:
                <Link onClick={()=>noLink()}>
                <div className="card-item">
                  <img
                    className="px-2"
                    src={imgMovie(item.poster_path)}
                    style={{ height: "200px", width: "150px", margin: "" }}
                  />
                </div>
              </Link>
            }
         
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ItemListTop