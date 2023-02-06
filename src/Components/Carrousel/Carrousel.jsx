import React, { useEffect, useState } from "react";
import { getApiRated } from "../../data";
import "./Carrousel.scss";
import Slider from "react-slick";
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

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div style={{position:'relative'}}>
        <Carousel>
          {imgCarrousel.map((item) => (
            <Carousel.Item>
              <img
                className="d-block w-100 img-carrousel"
                src={addImg(item.backdrop_path)}
                alt="First slide"
              />
               <h1 style={{position:'absolute',top:'150px',left:'100px',color:'white'}}>
                {item.title}
              </h1>
            </Carousel.Item>
           
          ))}
        </Carousel>

      </div>
     
    </div>
  );
};

export default Carrousel;
