import React from 'react';

const heroImage = 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80';

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Мебель RoyalHome" />
      <div className="hero-content">
        <p className="hero-eyebrow">Качество и стиль</p>
        <h1>Мебель для вашего дома</h1>
      </div>
    </section>
  );
}

export default Hero;