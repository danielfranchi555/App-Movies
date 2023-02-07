import React, { useEffect, useState } from "react";
import { getApiRated } from "../../data";
import Carrousel from "../Carrousel/Carrousel";
import logo from '../../img/video.png'
import ItemList from "../ItemList/ItemList";
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming";
import Profile from "../Profile/Profile";
import './ItemListContainer.scss'
const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getApiRated(setData);
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <h4 style={{ color: "white" }} className="text-center">
        loading...
      </h4>
    );
  }
  return (
    <div className=" ">
      <Carrousel />
      <div className="container">
        <ItemList data={data} />
        <ItemListUpcomming />
       
      </div>
    </div>
  );
};

export default ItemListContainer;
