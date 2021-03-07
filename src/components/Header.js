import React from 'react';
import '../stylesheets/layout/_header.scss';

const Header = () => {
  const logo = './Rick_and_Morty.png';
  const alt = 'logo';

  return (
    <h1 className="logoContainer">
      <img className="logo" src={logo} alt={alt} title={alt} />
    </h1>
  );
};

export default Header;
