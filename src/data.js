let api_key = '364d3195439e0a83c0678c267c5bbefe'

  const getApiRated = async (state) =>{
  const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
  const resp = await data.json()
  console.log(resp.results)
  state(resp.results)
}

export{
    getApiRated
}


const getApiUpcomming = async (state)=>{
   const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
   const resp = await data.json()
  state(resp.results)
}
 export{
  getApiUpcomming
 }