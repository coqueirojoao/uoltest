import React from 'react'

const Input = ({ type, placeholder, key }) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} key={key} className='border-[1px] border-[#9a9a9a] text-lg px-5 rounded-md w-[250px] h-[50px]' />
    </div>
  )
}

export default Input