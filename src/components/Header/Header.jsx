import React from 'react'
import './index.scss'
import DNCLogo from '../../assets/logo-dnc.svg'

const Header = (props) => {
  return (
    <header className='Header'>
      <img className='Header__img' src={DNCLogo} alt="Logo DNC" />
      {props.menu}
    </header>
  )
}

export default Header
