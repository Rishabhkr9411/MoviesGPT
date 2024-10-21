import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom';

const MovieCard = ({movieName,posterPath,id}) => {
  if(!posterPath) return null;
 

  return (
   <Link to={`/browse/${movieName}/${id}`} >

    <div className='w-48 pr-4 hover:cursor-pointer'>
      <img  
      alt="Movie Card" 
      src={IMG_CDN_URL+posterPath}
      />
    </div>

    </Link>
  );
};

export default MovieCard
