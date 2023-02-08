import React, { useEffect, useState } from "react";
import { getApiRated } from "../../data";
import Carrousel from "../Carrousel/Carrousel";
import ItemList from "../ItemList/ItemList";
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming";
import Profile from "../Profile/Profile";
import { useAuth0 } from '@auth0/auth0-react';

import "./ItemListContainer.scss";
import ItemListTop from "../ItemListTop/ItemListTop";
const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isAuthenticated,user} = useAuth0()

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getApiRated(setData);
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <div className="">
      {loading?
     <h3 className="text-center " style={{marginTop:'100px',color:'white'}}>
        loading...
      </h3>
    :
    <div>
    <div>
  <Carrousel />
</div>
<div className="container">
  {isAuthenticated && <h2 style={{color:'white',textAlign:'center',marginTop:'20px'}}> Peliculas para <span style={{color:'#a2c11c'}}>{user.name}</span> </h2>}
 <ItemList data={data} />
  <ItemListUpcomming />
  <ItemListTop className='py-5'/>
</div>
</div>
    }
      
    </div>
  );
};

export default ItemListContainer;
