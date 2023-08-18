import React from 'react'

const NewUserCard = () => {
  return (
    <div className='w-[65%] lg:w-[55%] mx-auto mt-10 flex flex-col lg:flex-row justify-between'>
    <div className='flex flex-col gap-3'>
      <h2 className='text-xl text-[#616161] font-bold'>
        Novo usuário
      </h2>
      <p className='text-[#9c9c9c]'>
        Informe os campos a seguir para criar um novo usuário:
      </p>
    </div>
    </div>
  )
}

export default NewUserCard