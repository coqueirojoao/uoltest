import React from 'react'
import uol_logo from '../../assets/images/uol_logo.png';

const Header = () => {
  return (
    <div className='w-screen pt-5 bg-[#414141] flex justify-center items-center'>
        <img src={uol_logo} className='w-[130px]' alt="Logo da UOL" />
    </div>
  )
}

export default Header