import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'

const Input = ({ type, placeholder, key, name }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: '',
  })

  const checkType = () => {
    if (placeholder === 'CPF') {
      return '999.999.999-99'
    }
    if (placeholder === 'Telefone') {
      return '(99) 99999-9999'
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  } 
  return (
    <div>
      <ReactInputMask type={type} placeholder={placeholder} mask={checkType()} name={name} key={key} className='border-[1px] border-[#9a9a9a] text-lg px-5 rounded-md w-[250px] h-[50px]' />
    </div>
  )
}

export default Input