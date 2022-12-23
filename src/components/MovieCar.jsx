import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
function MovieCar() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

	
    
    useEffect(() => {
    fetchMovies(searchValue);
  },[searchValue]);
const fetchMovies = async () => {
    const url =
    `http://www.omdbapi.com/?i=tt3896198&apikey=e15d2eb2`;
    const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
  };
  
  






  return (

    <div>
        
        
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      
     

    
      </div>
  )
}

export default MovieCar