import React, { useEffect, useState } from "react";
import { getApiRated } from "../../data";
import Carrousel from "../Carrousel/Carrousel";
import ItemList from "../ItemList/ItemList";
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import { useAuth0 } from '@auth0/auth0-react';
import {getApiUpcomming} from '../../data'
import {getMovieDetailTop} from '../../data'
import "./ItemListContainer.scss";
import ItemListTop from "../ItemListTop/ItemListTop";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const ItemListContainer = () => {
 

  const [data, setData] = useState([]);
  const [dataRated, setDataRated] = useState([]);
  const [dataTop, setDataTop] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isAuthenticated,user} = useAuth0()
  const [input,setInput]= useState('')
  const [lgShow, setLgShow] = useState(false);

 const newArray = data.concat(dataRated,dataTop)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getApiRated(setData);
      getApiUpcomming(setDataRated)
      getMovieDetailTop(setDataTop)
      setLoading(false);
    }, 3000);
  }, []);

  const filterMovies = newArray.filter((movie)=>movie.title.toLowerCase().includes(input.toLocaleLowerCase()))
 
  const handleSumbit = (e)=>{
      e.preventDefault()
  }
  const handleChange = (e)=>{
       setInput(e.target.value)
  }
 
  const imgMovie = (url)=>{
    let img
   return  img = `https://image.tmdb.org/t/p/original${url}`
 }


  return (
    <div className="">
      {loading?
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
    :
    <div>
    <div>
  <Carrousel />
</div>
<div className="container">


  <div className="text-center">
      <Button onClick={() => setLgShow(true)}>Search Movie</Button>
  <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="text-center"
      >
        <Modal.Header closeButton>

        </Modal.Header>
        <div>
        <form onSubmit={handleSumbit} >
     <input type="text" 
     onChange={handleChange}
     value={input}
  />
  <input type="submit" />
  </form> 
        </div >
        <Modal.Body>
          {input === ''? null :
           filterMovies.map((item)=>(
            <Link to={`/detalle/${item.id}`}>
            <img style={{width:'100px'}} src={imgMovie(item.poster_path)} ></img>
            </Link>
           ))
          }
        </Modal.Body>
      </Modal>
  </div>
 
  {isAuthenticated && <h2 style={{color:'white',textAlign:'center',marginTop:'20px'}}> Peliculas para <span style={{color:'#a2c11c'}}>{user.name}</span> </h2>}
 <ItemList data={data} />
  <ItemListUpcomming />
  <ItemListTop className='py-5'/>
</div>
  <Footer></Footer>
</div>
    }
      
    </div>
  );
};

export default ItemListContainer;
