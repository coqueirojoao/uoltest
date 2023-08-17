import React from 'react'
import uol_logo from '../../assets/uol_logo.png';

const Header = () => {
  return (
    <div className='w-screen pt-5 bg-[#1D1D1D] flex justify-center items-center'>
        <img src={uol_logo} className='w-[130px]' alt="Logo da UOL" />
    </div>
  )
}

export default Header