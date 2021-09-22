import { useContext } from "react"
import GifContexts from '../context/GifContexts'

export default function useGlobalGifs() {
    const {gifs} = useContext(GifContexts);
    return gifs;
}