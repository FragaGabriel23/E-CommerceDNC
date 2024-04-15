import React from 'react'
import './index.scss'
import search from '../../assets/search.svg'
import profile from '../../assets/profile.svg'
import heart from '../../assets/heart.svg'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div className='Search'>
      <div className='Search__input'>
        <img src={search} alt="Search Icon" />
        <input type="text" name='search' placeholder='O que você está procurando?' />
      </div>
      <div className='Search__Icons'>
        <Link to={"/login"}>
          <img src={profile} alt="Profile Icon" />
        </Link>
        <Link to={"/login"}>
          <img src={heart} alt="Heart Icon" />
        </Link>
      </div>
    </div>
  )
}

export default Search