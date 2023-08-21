import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import CreateClientCard from '../components/CreateClientCard';
import ClientCards from '../components/ClientCards';
import ClientsCount from '../components/ClientsCount';
import Modal from '../components/Modal';

import { inputTypes } from '../../assets/helpers/inputTypes';
import Input from '../components/Input';

const Home = () => {
  const [clients, setClients] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      const url = `http://localhost:3000/clients`;
      const data = await fetch(url).then((res) => res.json());
      setClients(data);
    };
    fetchClients();
  }, []);

  
  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <ContentTitle title='Painel de clientes' />
      <CreateClientCard />
      <Modal isOpen={isModalOpen} onClose={closeModal} title='Editar contato'>
        {inputTypes.map((e, i) => (
          <Input key={i} type={e.type} placeholder={e.placeholder} />
        ))}
      </Modal>
      <ClientCards clients={clients} onClick={openModal} />
      <ClientsCount clients={clients} />
    </div>
  );
};

export default Home;
