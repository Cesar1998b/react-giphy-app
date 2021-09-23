import React, { useState } from 'react';
import SearchResults from '../SearchResults/index';
import GifCollectionItem from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useFetchGifs } from 'hooks/useFetchGifs';
import "./Home.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const { loading, gifs } = useFetchGifs();

  return (
    <section>
      <SearchResults keyword={keyword} setKeyword={setKeyword} />
      <h3 className="title">Last Search</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="App-main">
        <div className="card-grid">
          {gifs.map((img) => (
            <GifCollectionItem key={img.id} {...img} />
          ))}
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </section>
  );
}
