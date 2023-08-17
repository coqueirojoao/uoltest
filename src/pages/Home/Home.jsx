import React from 'react'
import Header from '../components/Header'
import ContentTitle from '../components/ContentTitle'
import CreateClientCard from '../components/CreateClientCard'

const Home = () => {
  return (
    <div>
        <Header />
        <ContentTitle title="Painel de clientes" />
        <CreateClientCard />
    </div>
  )
}

export default Home