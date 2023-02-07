import React from 'react'
import Item from '../Item/Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItemList = ({data}) => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 200,
    slidesToShow: 4,
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
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],}
  return (
    <div className='mt-5 ' >
      <span style={{color:'white'}}>Movies Popular</span>
      <Slider {...settings}>
        {data.map((item)=>(
             <div className='px-5'>
              <Item item={item}/>
             </div>
          
        ))}
       </Slider>
    </div>
  )
}

export default ItemList