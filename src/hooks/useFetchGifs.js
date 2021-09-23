import { useState, useEffect,useContext} from "react";
import  getGifs  from "../services/getGifs";
import GifContexts from '../context/GifContexts'

export function useFetchGifs({keyword} = {keyword : null}) {
  const [loading, setLoading] = useState(false)
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

  return {loading,gifs};
};
