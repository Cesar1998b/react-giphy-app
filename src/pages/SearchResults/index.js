import React from "react";
import ListOfGifs from "components/ListOfGifs";
import SearchForm from "components/SearchForm";
import { useFetchGifs } from "hooks/useFetchGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useFetchGifs({ keyword });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";
  return (
    <>
      {loading ? (
        <p className="animate__animatedListOfGifsanimate__flash">Loading</p>
      ) : (
        <>
          <div>
            <title>{title}</title>
            <meta name="description" content={title} />
          </div>
          <header className="o-header">
            <SearchForm initialKeyword={keyword} />
          </header>
          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
          </div>
        </>
      )}
    </>
  );
}
