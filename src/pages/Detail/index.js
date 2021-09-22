import React from 'react'
import useGlobalGifs from 'hooks/useGlobalGifs'
import GifCollectionItem from 'components/GifCollectionItem'
import "./Detail.css"

export default function Detail({ params }) {
    const gifs = useGlobalGifs()
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    return (
    <div className="title">
        <h2>Detalle del Gif</h2>
        <GifCollectionItem {...gif}/>
    </div>)
}
