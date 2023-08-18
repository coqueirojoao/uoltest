import React from 'react'

const ClientsCount = ({ clients }) => {
  return (
    <div className='w-[65%] lg:w-[55%] mx-auto mt-5 text-[#bababa] my-10'>
        {`Exibindo ${clients?.length} clientes`}
    </div>
  )
}

export default ClientsCount