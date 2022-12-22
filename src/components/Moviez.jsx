import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Moviez = () => {

const [movie, setMovies] = useState([])
const handleMoviez =() => {

    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=e15d2eb2`; 
    axios.get(url).then(res=>{
        const resData= res.data
        setMovies(resData)
    })
    .catch(err=>console.log(err))


}
const displayMoviez = movie.Map(data=>{
    return <div>
        <span> {data}</span>
    </div>
})



  return (
    <div><h1>Moviez</h1>

    <button type='button' style={{backgroundColor:"black", color:"white"}} onClick={handleMoviez}>Get movies <br /> {displayMoviez}</button>
        

    </div>

  )
}

export default Moviez