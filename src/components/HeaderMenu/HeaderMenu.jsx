import React from 'react'
import './index.scss'
import cartshop from '../../assets/cartshop.svg'

const HeaderMenu = (props) => {
  return (
    <nav className='Header-Menu'>

      <ul>
        <li className='Header-Menu--select'>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>

      <div>
        <h2>Meu Carrinho</h2>
        <img className='Header-Menu__img' src={cartshop} alt="Carrinho" />
      </div>

    </nav>
  )
}

export default HeaderMenu