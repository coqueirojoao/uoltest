import React from 'react';
import Button from './Button';

const CreateClientCard = () => {
  return (
    <div className='w-[50%] mx-auto mt-10 flex justify-between'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-xl text-[#616161] font-bold'>
          Listagem de usuários
        </h2>
        <p className='text-[#9c9c9c]'>
          Escolha um cliente para visualizar os detalhes
        </p>
      </div>
      <Button
        background='primary'
        size='w-[120px]'
        height='h-[40px]'
        title='Novo cliente'
      />
    </div>
  );
};

export default CreateClientCard;
