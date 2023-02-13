import React from "react";
import "./ItemDetail.scss";
const ItemDetail = ({ movieDetail }) => {
  const { title, release_date, overview, poster_path } = movieDetail;
  const getImg = (url) => {
    let image = `https://image.tmdb.org/t/p/original/${url}`;
    return image;
  };

  return (
   <div >
   
   </div>
  );
};

export default ItemDetail;
