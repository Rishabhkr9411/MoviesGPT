import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <>
      <div className=' absolute bg-gradient-to-b from-black z-10 '>
        <img className='w-44 mx-auto' src={LOGO_URL} alt="logo" />
      </div>
      
    </>
  )
}

export default Header
