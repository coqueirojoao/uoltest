import React from 'react'
import Header from '../components/Header'
import ContentTitle from '../components/ContentTitle';
import NewUserCard from '../components/NewUserCard';
import Input from '../components/Input';
import Button from '../components/Button';

import { inputTypes } from '../../assets/helpers/inputTypes';
import DropdownSelect from '../components/DropdownSelect';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    }

  return (
    <div className='overflow-x-hidden'>
        <Header />
        <ContentTitle title='Painel de clientes' />
        <NewUserCard />
        <div className='w-[65%] lg:w-[55%] mx-auto mt-20 flex flex-col gap-5'>
        {inputTypes.map((element, i) => (
          <Input type={element.type} placeholder={element.placeholder} key={i}  />
        ))}
        <DropdownSelect options={['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado']} placeholder='Status' />
        </div>
        <div className='my-8 w-[65%] lg:w-[55%] mx-auto flex gap-3'>
          <Button title='Criar' size='w-[130px]' height='h-[45px]' background='primary' />
          <Button title='Voltar' size='w-[130px]' height='h-[45px]' background='secondary' onClick={handleClick} />
        </div>
    </div>
  )
}

export default Register