import { useState, useEffect,useContext} from "react";
import  getGifs  from "../services/getGifs";
import GifContexts from '../context/GifContexts'

const INITIAL_PAGE = 0

export function useFetchGifs({keyword} = {keyword : null}) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifContexts)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'gatitos'

  useEffect(() => {
    setLoading(true)

    getGifs({keyword : keywordToUse})
    .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setGifs])

  return {loading, loadingNextPage, gifs, setPage};
};
