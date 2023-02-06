import React, { useEffect, useState } from "react"
import {getApiRated}  from '../../data'
import Carrousel from "../Carrousel/Carrousel"

import ItemList from "../ItemList/ItemList"
import ItemListUpcomming from "../ItemListUpcomming/ItemListUpcomming"

const ItemListContainer = ()=>{
 const[data,setData]=useState([])
 const[loading,setLoading]=useState(true)

    useEffect(()=>{
      setTimeout(() => {
         setLoading(true)
          getApiRated(setData) 
     setLoading(false)
      }, 3000);
    
    },[])

  if(loading){
    return <h4 style={{color:'white'}} className='text-center'>loading...</h4>
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