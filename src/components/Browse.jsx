import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  
  useNowPlayingMovies();


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
