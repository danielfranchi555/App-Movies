import React from 'react'
import Item from '../Item/Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ItemList = ({data}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,

   

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],}
  return (
    <div className=' container' style={{marginTop:'10px'}}>
      <div className=''>
              <p style={{color:'white',marginbottom:'10px',fontSize:'20px',fontWeight:'600'}}>Movies Popular</p>
      </div>
      <Slider {...settings}>
        {data.map((item)=>(
             
              <Item key={item.id} item={item}/>
          
        ))}
       </Slider>
    </div>
  )
}

export default ItemList