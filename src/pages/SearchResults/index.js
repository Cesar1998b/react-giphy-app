import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'wouter'
import "./SearchResults.css"


function SearchResults({keyword,setKeyword}) {
  const [inputValue, setInputValue] = useState('');
  //eslint-disable-next-line 
  const [path, pushLocation] = useLocation(); 

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addCategoryToList = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){        
        keyword = inputValue;
        pushLocation(`/search/${keyword}`);
        setKeyword(inputValue); 
        setInputValue("");
    }else{
        alert('text must be 3 characters or more');
    }
  };

  return (
    <form onSubmit={addCategoryToList} className="c-search">
      <button className="c-button">Search</button>
      <input
        className="c-search-input"
        type="text"
        placeholder="Search a gif.."
        value={inputValue}
        onChange={changeInputValue}
      />
    </form>
  );
}

SearchResults.propTypes = {
    setKeyword: PropTypes.func.isRequired
}

export default React.memo(SearchResults);