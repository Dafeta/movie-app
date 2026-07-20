import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={term} 
        onChange={(e) => setTerm(e.target.value)}
        placeholder='Search movies...'
        className='input input-success rounded-3xl py-6 px-6 w-full bg-blue-300 text-black placeholder:text-black'
      />
    </form>
  )
}

export default SearchBar