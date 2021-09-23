import React  from "react";
import useForm from './hook'
import { useLocation } from "wouter";
import "./SearchResults.css";

function SearchResults({ initialKeyword = "" }) {
  const {keyword, changeKeyword} = useForm({ initialKeyword })
  //eslint-disable-next-line
  const [_, pushLocation] = useLocation();

  const handleChange = (e) => {
    changeKeyword({ keyword: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
  };

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      pushLocation(`/search/${keyword}`);
    } else {
      alert("text must be 3 characters or more");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="c-search">
      <button className="c-button">Search</button>
      <input
        className="c-search-input"
        type="text"
        placeholder="Search a gif.."
        onChange={handleChange}
        value={keyword}
      />
    </form>
  );
}

export default React.memo(SearchResults);
