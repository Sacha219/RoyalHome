// src/components/SideMenu.jsx
import React from 'react';
import { categories } from '../data/categories';

function SideMenu({ isOpen, onClose, onSelectCategory }) {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    onClose();
  };

  return (
    <>
      {/* Оверлей (затемнение) */}
      <div className={`side-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

      {/* Боковая панель */}
      <div className={`side-menu-panel ${isOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <span>Каталог</span>
          <button className="side-menu-close" onClick={onClose}>×</button>
        </div>
        <ul className="side-menu-list">
          <li>
            <a href="#catalog" onClick={() => handleCategoryClick(null)}>Все товары</a>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <a href="#catalog" onClick={() => handleCategoryClick(category)}>{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideMenu;