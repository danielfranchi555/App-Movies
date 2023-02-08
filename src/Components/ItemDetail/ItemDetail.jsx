import React from "react";
import "./ItemDetail.scss";
const ItemDetail = ({ movieDetail }) => {
  const { title, release_date, overview, poster_path } = movieDetail;
  const getImg = (url) => {
    let image = `https://image.tmdb.org/t/p/original/${url}`;
    return image;
  };

  return (
   <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className="col-md" >
        <div style={{display:'flex',justifyContent:'center'}}>
        <img src={getImg(poster_path)} alt=""  style={{marginTop:'20px',maxWidth:'250px'}} />
        </div>
      </div>
      <div className="col-md" style={{color:'white',display:'flex',alignItems:'center',flexDirection:'column' ,justifyContent:'center'}}>
        <h1>{title}</h1>
        <div>
          {release_date}
        </div>
        <div className="overview">
            <p>{overview}</p>
        </div>
        <div className="" style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',width:'500px',margin:'13px',border:'solid 2px white',borderRadius:'20px'}}>
          <div style={{display:'flex'}}>
            <div style={{marginTop:'10px'}}>
             <p >Lenguaje:   {movieDetail.spoken_languages? movieDetail.spoken_languages[0].name:null}</p>
            </div>
          </div>
          <div >
              <button className="btn " style={{backgroundColor:'#a2c11c'}}>Watch</button>
          </div>
        </div>
      </div>
   </div>
  );
};

export default ItemDetail;
