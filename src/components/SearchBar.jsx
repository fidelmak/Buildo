import React from 'react'

function SearchBar(props) {
  return (
    <div className="font-bold m-10  "style={{marginTop:"-15%"} } ><h1>Search</h1>
    <input className='border rounded border-black w-full '  type="text"  value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...' />
    
    
    
    </div>
  )
}

export default SearchBar