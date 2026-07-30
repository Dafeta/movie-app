import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-3 justify-center items-center mb-4'>
      <input 
        type="text" 
        value={term} 
        onChange={(e) => setTerm(e.target.value)}
        placeholder='Search movies...'
        className='input input-success rounded-3xl py-6 px-6 w-full bg-blue-300 text-black placeholder:text-black'
      />
      <button type='submit'>
        <FaSearch className='btn btn-success size-11 bg-blue-300 rounded-2xl py-3 px-3 text-black'/>
        </button>
    </form>
  )
}

export default SearchBar