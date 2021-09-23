import { useState, useEffect,useContext} from "react";
import { getGifs } from "../services/getGifs";
import GifContexts from '../context/GifContexts'

export const useFetchGifs = (keyword = null) => {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifContexts)

  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'gatitos'
    
    //eslint-disable-next-line 
    getGifs(keyword = keywordToUse).then(gifs => {
        setGifs(gifs)
        setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    });
  }, [keyword, setGifs]);

  return {loading,gifs};
};
