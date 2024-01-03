import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import ProductsCard from '../../components/ProductsCard/ProductsCard'

const Home = ({ data }) => {
  return (
    <div className='home'>
      <Header menu={<HeaderMenu />} />
      <Search />
      <div className="home__products">
        { data.map((products) => (<ProductsCard key={products.id} data={products} />)) }
      </div>
    </div>
  )
}

export default Home