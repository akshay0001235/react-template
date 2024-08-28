import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeTab, setActiveTab] = useState('productTable');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="/productTable"
            className={activeTab === 'productTable' ? 'active' : ''}
            onClick={() => handleClick('productTable')}
          >
            ProductTable
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeTab === 'contact' ? 'active' : ''}
            onClick={() => handleClick('contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
