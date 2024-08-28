import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='container'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/productTable" element={<ProductTable />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
