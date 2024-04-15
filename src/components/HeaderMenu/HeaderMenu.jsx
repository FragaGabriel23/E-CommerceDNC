import React from 'react'
import './index.scss'
import cartshop from '../../assets/cartshop.svg'
import { Link } from 'react-router-dom'

const HeaderMenu = (props) => {
  return (
    <nav className='Header-Menu'>

      <ul>
        <li className='Header-Menu--select'><Link to={"/"}>Home</Link></li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>

      <div>
        <Link to={"/login"}>
          <h2>Meu Carrinho</h2>
        </Link>
        <img className='Header-Menu__img' src={cartshop} alt="Carrinho" />
      </div>

    </nav>
  )
}

export default HeaderMenu