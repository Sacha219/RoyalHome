import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-heading">
          <h2>Контактная информация</h2>
        </div>
        <div className="footer-inner">
          <div className="footer-contacts">
            <div>
              <strong>Телефон</strong>
              <a href="tel:+375291234567">Ваш телефон</a>
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@royalhome.by">Ваша почта</a>
            </div>
            <div>
              <strong>Адрес</strong>
              <span>Ваш адрес</span>
            </div>
          </div>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
            <a href="#">VK</a>
          </div>
        </div>
        <div className="footer-copy">
          <p>© 2026 ВАШЕ НАЗВАНИЕ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;