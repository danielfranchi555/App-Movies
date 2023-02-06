import React, { useEffect, useState } from "react"
import {getApiRated}  from '../../data'
import Carrousel from "../Carrousel/Carrousel"

import ItemList from "../ItemList/ItemList"
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming"

const ItemListContainer = ()=>{
 const[data,setData]=useState([])
 const[loading,setLoading]=useState(true)

    useEffect(()=>{
     getApiRated(setData) 
     setLoading(false)
    },[])

  if(loading){
    return <h1>loading</h1>
  }
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