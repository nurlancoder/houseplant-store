import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state => state.totalItems);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EV BİTKİSİ MAĞAZASI</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Ana Səhifə</Link>
          </li>
          <li>
            <Link to="/products">Məhsullar</Link>
          </li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart />
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;