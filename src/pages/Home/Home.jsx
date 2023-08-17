import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import CreateClientCard from '../components/CreateClientCard';
import Cards from '../components/Cards';

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
    <div>
      <Header />
      <ContentTitle title='Painel de clientes' />
      <CreateClientCard />
      <Cards clients={clients} />
      <h2 className='w-[50%] mx-auto mt-5 text-[#bababa]'>{`Exibindo ${clients.length} clientes`}</h2>
    </div>
  );
};

export default Home;
