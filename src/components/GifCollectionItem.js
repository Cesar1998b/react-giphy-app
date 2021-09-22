import React from "react";
import { Link } from 'wouter'
import "../App.css";

function GifCollectionItem({ id, title, url }) {
  return (
    <div className="card animate__animated animate__fadeIn">
      <Link to={`/gif/${id}`} className='Gif-link'>
      <img src={url} alt={title} />
      <h4>{title}</h4>
      </Link>
    </div>
  );
}

export default GifCollectionItem;
