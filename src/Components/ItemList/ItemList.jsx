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
          slidesToShow: 4,
          slidesToScroll: 2,
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
    <div className='mt-5 container' >
      <p style={{color:'white',marginbottom:'10px'}}>Movies Popular</p>
      <Slider {...settings}>
        {data.map((item)=>(
             <div key={item.id} className='container'>
              <Item item={item}/>
             </div>
          
        ))}
       </Slider>
    </div>
  )
}

export default ItemList