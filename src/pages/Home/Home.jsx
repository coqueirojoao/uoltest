import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import CreateClientCard from '../components/CreateClientCard';
import Cards from '../components/Cards';
import ClientsCount from '../components/ClientsCount';

const Home = () => {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      const url = `http://localhost:3000/clients`;
      const data = await fetch(url).then((res) => res.json());
      setClients(data);
    };
    fetchClients();
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <ContentTitle title='Painel de clientes' />
      <CreateClientCard />
      <Cards clients={clients} />
      <ClientsCount clients={clients} />
    </div>
  );
};

export default Home;
