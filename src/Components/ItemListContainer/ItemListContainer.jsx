import React, { useEffect, useState } from "react";
import { getApiRated } from "../../data";
import Carrousel from "../Carrousel/Carrousel";
import logo from "../../img/video.png";
import ItemList from "../ItemList/ItemList";
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming";
import Profile from "../Profile/Profile";
import "./ItemListContainer.scss";
import ItemListTop from "../ItemListTop/ItemListTop";
const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getApiRated(setData);
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <div className="mt-5">
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
