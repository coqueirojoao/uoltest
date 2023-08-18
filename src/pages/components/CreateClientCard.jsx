import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const CreateClientCard = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  }
  return (
    <div className='w-[65%] lg:w-[55%] mx-auto mt-10 flex flex-col lg:flex-row justify-between'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-xl text-[#616161] font-bold'>
          Listagem de usuários
        </h2>
        <p className='text-[#9c9c9c]'>
          Escolha um cliente para visualizar os detalhes
        </p>
      </div>
      <div className='mr-6 mt-5 lg:mt-0 h-[40px] w-[120px]' onClick={handleClick}>
        <Button
          background='primary'
          size='w-[120px]'
          height='h-[40px]'
          title='Novo cliente'
        />
      </div>
    </div>
  );
};

export default CreateClientCard;
