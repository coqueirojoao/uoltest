import React from 'react';
import { formattedCpf, formattedPhone } from '../../assets/helpers/formatTags';
import Button from './Button';

const Cards = ({ clients }) => {
  const checkClientStatus = (status) => {
    if (status === 'Ativo') {
      return 'bg-[#009018]';
    }
    if (status === 'Inativo') {
      return 'bg-[#E20000]';
    }
    if (status === 'Aguardando ativação') {
      return 'bg-[#ECF001]';
    }
    return 'bg-[#bababa]';
  };
  return (
    <div>
      {clients?.map((client) => (
        <div
          key={client.id}
          className='w-[65%] lg:w-[55%] flex flex-col lg:flex-row justify-center lg:justify-between mx-auto items-center mt-10 border-[1px] border-[#bababa] p-5'
        >
          <div className='flex flex-col justify-center w-full lg:w-[25%]'>
            <p className='text-[#616161]'>{client.name}</p>
            <p className='text-[#9c9c9c]'>{client.email}</p>
          </div>
          <div className='flex flex-col justify-center w-full lg:w-[25%]'>
            <p className='text-[#616161]'>{formattedCpf(client.cpf)}</p>
            <p className='text-[#9c9c9c]'>{formattedPhone(client.phone)}</p>
          </div>
          <div className='flex  items-center gap-2 w-full lg:w-[25%]'>
            <span
              className={`w-3 h-3 rounded-full ${checkClientStatus(
                client.status
              )}`}
            ></span>
            <p className='text-[#616161] '>{client.status}</p>
          </div>
          <div className='mt-8 lg:mt-0'>
            <Button
              title='Editar'
              background='secondary'
              size='w-[130px]'
              height='h-[45px]'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
