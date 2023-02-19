import React, { useEffect, useState } from "react";
import { getApiRated } from "../../data";
import "./Carrousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-bootstrap/Carousel";

const Carrousel = () => {
  const [imgCarrousel, setImgCarrousel] = useState([]);

  const addImg = (url) => {
    let urlImage;
    return (urlImage = `https://image.tmdb.org/t/p/original/${url}`);
  };

  useEffect(() => {
    getApiRated(setImgCarrousel);
  }, []);

 
  return (
    <div>
      <div  >
        <Carousel>
          {imgCarrousel.map((item) => (
            

            <Carousel.Item key={item.id} className='carousel-item'>
            <img 
              className=" img-carrousel " 
              src={addImg(item.poster_path)}
              alt="First slide"
            />
            <Carousel.Caption style={{marginBottom:'100px'}}>
              <h1>{item.title}</h1>
            </Carousel.Caption>
          </Carousel.Item>
           
          ))}
        </Carousel>

      </div>
     
    </div>
  );
};

export default Carrousel;
