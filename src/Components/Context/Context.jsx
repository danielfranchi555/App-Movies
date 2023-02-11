import React, { createContext, useContext, useState } from 'react'

const ContextGlobal = createContext()

 export const useContextGlobal = ()=> useContext(ContextGlobal)
const Context = ({children}) => {
  const [data, setData] = useState([]);
  const [dataRated, setDataRated] = useState([]);
  const [dataTop, setDataTop] = useState([]);
    const saludo = ()=>{
        alert('hola vengo desde el context')
    }
  return (
    <div>
       <ContextGlobal.Provider value={{
        data,
        dataRated,
        dataTop,
        setData,
        setDataRated,
        setDataTop
       }}>
    {children}
       </ContextGlobal.Provider>
    </div>
  )
}

export default Context