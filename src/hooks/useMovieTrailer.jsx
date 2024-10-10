import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/MoviesSlice";
import { useDispatch } from 'react-redux';

const useMovieTrailer=(id)=>{
    const dispatch= useDispatch();
    // const [trailerId,setTrailerId]= useState(null); alternative for redux

    const getMoviesVideos= async ()=>{
      // here i have to chage the id for dynamic 11477 is the id 
      const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
      const json= await data.json();
      
      // console.log(json);
  
      const filterData=json.results.filter((video)=>video.type ==="Trailer")
      const trailer=filterData.length? filterData[0]:json.results;
      // setTrailerId(trailer.key);
      // console.log(trailer)
      dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
      getMoviesVideos();
    },[])
  
}
export default useMovieTrailer;