import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {
  // this trailerId can also store in reduxstore 
  const [trailerId,setTrailerId]= useState(null);

  const getMoviesVideos= async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/519182/videos?language=en-US', API_OPTIONS)
    const json= await data.json();
    console.log(json);

    const filterData=json.results.filter((video)=>video.type ==="Trailer")
    const trailer=filterData.length? filterData[0]:json.results;
    setTrailerId(trailer.key);
    console.log(trailer)
  }
  useEffect(()=>{
    getMoviesVideos();
  },[])





  return (
    <div>
      <iframe 
        src={"https://www.youtube.com/embed/"+ trailerId } 
        title="YouTube video player" 
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        
      >
      </iframe>
    </div>
  )
}

export default VideoBackground
