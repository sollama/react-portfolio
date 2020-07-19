import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const HeaderMenuItem = ({linkLocation, labelText}) => {
  return <div className='header-menu'><Link to={linkLocation}>{labelText}</Link></div>;
}

const Header = ({ children }) => {

  return (
    <div>
      <div>
        <HeaderMenuItem linkLocation='/' labelText='Home' />
        <HeaderMenuItem linkLocation='/Generator' labelText='Meme Generator' />
        <HeaderMenuItem linkLocation='/Portfolio' labelText='Portfolio' />
      </div>
      {children}
    </div>
  )
}

export default Header;