import React, { useEffect, useState } from 'react'
import { LOGO_URL, USER_AVATAR } from '../utils/constants'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice';

const Header = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user =useSelector((store)=>store.user);
  const [isClicked, setIsClicked] = useState(false);

  const handleSignOut=()=>{
    setIsClicked(true);//I use this only for color change purpose 
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error")
    });

  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {// if user is sign in
        const {uid,email,displayName} = user;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName
          }));
          navigate("/browse");
      } else {// if user is sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
    
},[]);

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
          src={USER_AVATAR}
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
