import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {RouterProvider,createBrowserRouter, useNavigate} from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import{useDispatch} from "react-redux"
import {addUser, removeUser} from "../utils/UserSlice"

const Body = () => {
    const dispatch = useDispatch();
    

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {// if user is sign in
            const {uid,email,displayName} = user;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName
              }));
          } else {// if user is sign out
            dispatch(removeUser());
          }
        });
        
    },[])

  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body
