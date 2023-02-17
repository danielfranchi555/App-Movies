import React, { useEffect, useState } from "react";
import { getApiRated } from "../../data";
import Carrousel from "../Carrousel/Carrousel";
import ItemList from "../ItemList/ItemList";
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import {getApiUpcomming} from '../../data'
import  {useContextGlobal} from "../Context/Context";
import {getMovieDetailTop} from '../../data'
import "./ItemListContainer.scss";
import ItemListTop from "../ItemListTop/ItemListTop";
import Footer from "../Footer/Footer";

const ItemListContainer = () => {
  
  const {data, setData,setDataRated,setDataTop}= useContextGlobal()
   
 
  const [loading, setLoading] = useState(true);
  const {isAuthenticated,user} = useAuth0()


  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getApiRated(setData);
      getApiUpcomming(setDataRated)
      getMovieDetailTop(setDataTop)
      setLoading(false);
    }, 3000);
  }, []);



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
<div className="container ">

 
 
 
 <ItemList data={data} />
  <ItemListUpcomming />
  <ItemListTop className='py-5'/>
</div>
  <Footer/>
</div>
    }
      
    </div>
  );
};

export default ItemListContainer;
