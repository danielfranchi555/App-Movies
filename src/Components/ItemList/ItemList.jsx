import React from 'react'
import Item from '../Item/Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ItemList = ({data}) => {
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