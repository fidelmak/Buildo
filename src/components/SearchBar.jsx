import React from 'react'
import "./hero.css"

function SearchBar(props) {
  return (
    <div className="font-bold m-20 mb-0  "style={{marginTop:"-15%"} } ><h1 className='m'>Search</h1>
    <input className='border rounded    border-black w-full '  type="text"  value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...' />
    
    
    
    </div>
  )
}

export default SearchBar