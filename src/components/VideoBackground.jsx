import React, { useEffect, useState } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
  // this trailerId can also store in reduxstore 
  // get from the redux store 
  
  useMovieTrailer(movieId);
  const trailerVideo=useSelector(store=> store.movies?.trailerVideo) 

  return (
    <div>
      {/* getting youtube video on our page */}
      <iframe 
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
         } 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        
      >
      </iframe>
    </div>
  )
}

export default VideoBackground
