import React from 'react'
import img from './images/image1.jpeg'
import './hero.css'
// var backGroundImage = {
//     backGroundImage:"url('image1.jpeg')"
// }

function Hero() {
  return (
    <div>
       
       <div className="m-0">
        <img src={img} style={{width:"100%", height:"100vh"} } alt="images" /> 
        </div> 

  
        
            <h1 style={{marginTop:"-40%",marginBottom:"40%", marginLeft:"72px", lineHeight:"80px"} } className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Watch <br />something<br /> incredible.</h1>
    
                      
    </div>










 
  )
}

export default Hero