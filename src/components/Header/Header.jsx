import React from 'react'
import DNCLogo from '../../assets/logo-dnc.png'
import './index.scss'

const Header = () => {
  return (
    <header className='Header'>
        <img className='Header__img' src={DNCLogo} alt="Logo DNC"/>
    </header>
  )
}

export default Header
 