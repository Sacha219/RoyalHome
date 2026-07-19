import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark">RH</span>
          <span className="brand-name">Ваше название</span>
        </div>
        <nav className="nav-links">
          <a href="#catalog">Каталог</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;