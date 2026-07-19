import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import { products } from './data/products';
import './styles/global.css';

const ITEMS_PER_PAGE = 8;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Фильтруем товары по категории
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <Header onSelectCategory={handleCategorySelect} />
      <Hero />
      <main className="container" id="catalog">
        <div className="section-header">
          <h2 className="section-title">
            {selectedCategory || 'Вся мебель'}
          </h2>
          {selectedCategory && (
            <button
              className="clear-filter"
              onClick={() => {
                setSelectedCategory(null);
                setCurrentPage(1);
              }}
            >
              Показать всё
            </button>
          )}
        </div>
        <div className="cards-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <div className="empty-state">Нет товаров в этой категории</div>
          )}
        </div>
        {filteredProducts.length > ITEMS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;