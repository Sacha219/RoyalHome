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

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Получаем товары для текущей страницы
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Обработчик смены страницы
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Скроллим к каталогу после смены страницы
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />
      <Hero />
      <main className="container" id="catalog">
        <h2 className="section-title">Наша мебель</h2>
        <div className="cards-grid">
          {currentProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;