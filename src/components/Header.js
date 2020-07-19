import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div>
        <h3 style={style}><Link to='/'>Home</Link></h3>
        <h3 style={style}><Link to='/Generator'>Meme Generator</Link></h3>
        <h3 style={style}><Link to='/Portfolio'>Portfolio</Link></h3>
      </div>
      {children}
    </div>
  )
}

export default Header;