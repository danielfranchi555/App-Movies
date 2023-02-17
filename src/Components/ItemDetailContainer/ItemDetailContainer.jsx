import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ItemDetailContainer.scss";
import Spinner from "react-bootstrap/Spinner";
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';


const ItemDetailContainer = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [trailer, setTrailer] = useState('')
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)

  const [lgShow, setLgShow] = useState(false);


  const { id } = useParams();

  const {poster_path,overview,release_date,original_title,original_language,title} = movieDetail;
 
  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=364d3195439e0a83c0678c267c5bbefe&append_to_response=videos`
    );
    const resp = await data.json()
    console.log(resp)
     
    if(resp.videos && resp.videos.results){
      const trailer = resp.videos.results.find((video) => video.name === 'Official Trailer')
      setTrailer( trailer)
    }
    setMovieDetail(resp)
  };


  useEffect(() => {
      getTrailer();

    }, []);

  const getImg = (url) => {
    let image = `https://image.tmdb.org/t/p/original/${url}`;
    return image;
  };

  
 const buttonFunction = ()=>{
  setLgShow(true)
  setPlaying(true)
 }



   if (loading) {
    return (
      <div className="text-center mt-5">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    );
  } 

console.log(trailer)
  
  return (
    <div>
      <div
        className="detail-container"
        style={{ backgroundImage: `url(${getImg(poster_path)})` }}>
        </div>
      <div className="container" style={{ position: "relative" }}>
        <div className="row">
          <div
            className="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
               {playing?
               <>
                <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Trailer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <YouTube
               videoId={trailer.key}
               className="reproductor container"
               containerClassName={"youtube-container amru"}
               opts={{
                 width: "100%",
                 height: "400px",
                 playerVars: {
                   autoplay: 1,
                   controls: 0,
                   cc_load_policy: 0,
                   fs: 0,
                   iv_load_policy: 0,
                   modestbranding: 0,
                   rel: 0,
                   showinfo: 0,
                 },
               }}
             />
             <div className="text-center">
                <button className="btn btn-dark" onClick={()=>setPlaying(false)}>
                  Stop Watching
            </button>
             </div>
             
        </Modal.Body>
      </Modal>
          
               </>
       
            :
             null
            }
            <div style={{ marginTop: "20px" }}>
              <img
                src={getImg(poster_path)}
                style={{ width: "250px", borderRadius: "20px" }}
                alt=""
              />
         
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className="text-center" style={{ color: "white" }}>
                {original_title}
              </h2>
              <p style={{ color: "white" }}>{release_date}</p>
            </div>
            <div>
              <p style={{ color: "white" }}>{overview}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "100px" }}>
                <span
                  style={{
                    color: "white",
                    borderLeft: "solid 3px #9fd3c7",
                    padding: "10px",
                  }}
                >
                  Lenguaje : {original_language}
                </span>
              </div>
              <div>
                <button
                  className="btn"
                  style={{ backgroundColor: "#9fd3c7", color: "black" }}
                  onClick={()=>buttonFunction()}
                >
                  {" "}
                  Watch{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ItemDetailContainer;
