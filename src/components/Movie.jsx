import React from 'react'

function Movie(props) {
  return (
    <div>

{props.movies.map((movie, index) => (
				<div className=' flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
    </div>
  )
}

export default Movie