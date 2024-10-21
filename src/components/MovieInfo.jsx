import React from 'react'
import { useParams } from 'react-router-dom'

const MovieInfo = () => {
    const {movieName,id}=useParams();

  return (
    <div>
      Movie name is {movieName} and its id is {id}
    </div>
  )
}

export default MovieInfo
