import React from 'react'
import useGlobalGifs from 'hooks/useGlobalGifs'
import Gif from 'components/Gif'

export default function Detail({ params }) {
    const gifs = useGlobalGifs()
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    return (
    <div className="title">
        <h2>Detalle del Gif</h2>
        <Gif {...gif}/>
    </div>)
}
