import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TrailerMovie = ({moviesTitle}) => {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] =useState("");

    const [lgShow, setLgShow] = useState(false);

    function handleSearch() {
     setVideo(moviesTitle)
	movieTrailer(video).then((res) => {
	setVideoURL(res);
	});
}

useEffect(()=>{
handleSearch()
},[videoURL])
  return (
    <div>
       <Button onClick={() => setLgShow(true)}>Large modal</Button>

      <Modal
        size="lg"
        show={lgShow}
        style={{backgroundColor:'black',color:'black'}}
        onHide={() => setLgShow(false)}
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Trailer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={ {  width:'100px',color:'black'}}>
        <ReactPlayer style={{width:'auto'}}  url={videoURL} controls={true}/>
        </Modal.Body>
      </Modal>
    </div>
  
    
  )        

}

export default TrailerMovie
