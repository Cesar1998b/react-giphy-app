import React, {useRef, useCallback, useEffect} from "react";
import ListOfGifs from "components/ListOfGifs";
import SearchForm from "components/SearchForm";
import { useFetchGifs } from "hooks/useFetchGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from 'just-debounce-it'

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useFetchGifs({ keyword });
  
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

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
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
}
