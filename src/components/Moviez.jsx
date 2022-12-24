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



  return (
    <div >



    <div className="p-20 pt-4 w-full md:w-1/3">
        
            <button type='button' className='mb-4 p-2 border rounded'
            style={{backgroundColor:"black", color:"white"}}
             onClick={handleMoviez}>Get movies</button>
        <div className="bg-white rounded-lg shadow-lg">
        <img src="https://images.thedirect.com/media/article_full/guardians-galaxy-mcu.jpg?imgeng=cmpr_75/" alt="" className="rounded-t-lg" />
        <div className="p-6">
        <h2 className="font-bold mb-2 text-2xl text-black">Movie Title 👉{movie.Title}
        </h2>
        <p className="text-black mb-2">Plot :👉 {movie.Plot}</p>
        <a href="#" class="text-black w-2 hover:text-black underline text-sm">Movie Year <br/> {movie.Year}👉</a>
        </div>

    </div>

    







            


             
    </div>
        

    </div>

  )
}

export default Moviez