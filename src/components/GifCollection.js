import React from "react";
import GifCollectionItem from "./GifCollectionItem";
import "../App.css";
import { useFetchGifs } from "hooks/useFetchGifs";

function GifCollection({ params }) {

    const { keyword } = params;
    const {loading, gifs} = useFetchGifs(keyword);

  return (
    <> 
    {/* <h3 className="animate__animated animate__fadeIn">{category}</h3> */}
    {loading && <p className="animate__animated animate__flash">Loading</p>}    
    <div className="card-grid">
        {gifs.map((img) => (
          <GifCollectionItem key={img.id} {...img}/>
        ))}
    </div> 
    </>
  );
}

export default GifCollection;
