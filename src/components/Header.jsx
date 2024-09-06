import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Header = () => {
  
  const navigate=useNavigate();
  const user =useSelector((store)=>store.user);
  const [isClicked, setIsClicked] = useState(false);

  const handleSignOut=()=>{
    setIsClicked(true);
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }

  return (
    <>
      <div className=' absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img 
        className='w-44 ' 
        src={LOGO_URL} alt="logo" 
        />
        {user &&(
        <div className='flex p-4 m-3 gap-4 cursor-pointer '>
          <img 
          className='w-10 h-10'
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" 
          alt="usericon" />
          <button 
          onClick={handleSignOut}
          className={`font-bold text-white px-4 py-2 rounded-md ${
            isClicked ? 'bg-blue-700' : 'bg-violet-900'
          }`}
          >Sign out</button>
        </div>
)}


      </div>
      
    </>
  )
}

export default Header
