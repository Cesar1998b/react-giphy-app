import React from "react";
import ListOfGifs from "./ListOfGifs";
import { useFetchGifs } from "hooks/useFetchGifs";
import "../App.css";

function GifCollection({ params }) {

    const { keyword } = params;
    const {loading, gifs} = useFetchGifs(keyword);

  return (
    <> 
    <h3 className="title animate__animated animate__fadeIn">{keyword}</h3>
    {loading && <p className="animate__animatedListOfGifsanimate__flash">Loading</p>}    
    <div className="card-grid">
        {gifs.map((img) => (
          <ListOfGifs key={img.id} {...img}/>
        ))}
    </div> 
    </>
  );
}

export default GifCollection;
