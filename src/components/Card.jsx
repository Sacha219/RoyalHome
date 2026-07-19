import React from 'react';

function Card({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">{product.price.toLocaleString('ru-RU')} ₽</div>
      </div>
    </article>
  );
}

export default Card;