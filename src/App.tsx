
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomeLayout from './layouts/HomeLayout';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetails from './pages/ProductDetails';
import CategoryFilterLayout from './layouts/CategoryFilterLayout';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/categoryfilter/:title" element={<CategoryFilterLayout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
