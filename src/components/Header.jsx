// src/components/Header.jsx
import React, { useState } from 'react';
import SideMenu from './SideMenu';

function Header({ onSelectCategory }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark">RH</span>
          <span className="brand-name">Ваше название</span>
        </div>
        <button className="catalog-toggle" onClick={toggleMenu}>
          <span className="burger-icon">
            <span></span><span></span><span></span>
          </span>
          <span>Каталог</span>
        </button>
      </div>
      <SideMenu isOpen={menuOpen} onClose={toggleMenu} onSelectCategory={onSelectCategory} />
    </header>
  );
}

export default Header;