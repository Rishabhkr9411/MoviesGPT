import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovie';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <>
    {/* in header the title signout profile */}
    {/* in MainContainer the background video title  */}
    {/* in secondaryContainer having n number of list of the movies */}
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        MainContainer
          -
          -
        SecondaryContainer
          -
       */}
    </>
  )
}

export default Browse
