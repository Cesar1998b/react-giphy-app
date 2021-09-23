import React from 'react';
import SearchForm from '../../components/SearchForm/index';
import TrendingSearches from 'components/TrendingSearches';
import { useFetchGifs } from 'hooks/useFetchGifs';
import ListOfGifs from 'components/ListOfGifs';

export default function Home() {
  const { loading, gifs } = useFetchGifs();

  return (
    <section>
      <header>
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="title">última búsqueda</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <ListOfGifs gifs={gifs}/>
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </section>
  );
}
