import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import { useParams } from 'react-router-dom'

const Products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section className='product'>
      <Header menu={<HeaderMenu />} />
      <Search />
      <ProductDetail data={selectedProduct} />
    </section>
  )
}

export default Products