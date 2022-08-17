import React from 'react'
import '../Bloglisting/styles.css';

const Search = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input
          type='text'
          placeholder='Search By Category'
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
  
  export default Search;
  