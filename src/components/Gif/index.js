import React from "react";
import { Link } from 'wouter'
import "./Gif.css";

function Gif({ title, id, url }) {
  console.log()
  return (
    <div className="Gif animate__animated animate__fadeIn">
      <Link to={`/gif/${id}`} className='Gif-link'>
      <h4>{title}</h4>
      <img src={url} alt={title} />
      </Link>
    </div>
  );
}

export default Gif;
