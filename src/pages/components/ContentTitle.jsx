import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';

const ContentTitle = ({ title }) => {
  return (
    <div className='w-[50%] mt-28 flex flex-col mx-auto'>
        <div className='text-[#414141] flex justify-start items-center gap-5'>
        <AiOutlineUser className='text-5xl'/>
        <h2 className='font-semibold text-3xl '>{title}</h2>
        </div>
        <div className='border-b-[1px] w-[60vw] border-[#bababa] mt-10'></div>
    </div>
  )
}

export default ContentTitle