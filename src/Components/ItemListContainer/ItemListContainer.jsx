import React, { useEffect, useState } from "react"
import {getApiRated}  from '../../data'
import Carrousel from "../Carrousel/Carrousel"

import ItemList from "../ItemList/ItemList"
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming"

const ItemListContainer = ()=>{
 const[data,setData]=useState([])
    useEffect(()=>{
     getApiRated(setData) 
    },[])

 return (
    <div className=" ">
            <Carrousel></Carrousel>
      <div className="container">
     <ItemList data={data}/>
     <ItemListUpcomming/>
      </div>
     
    </div>
)
 }

 export default ItemListContainer