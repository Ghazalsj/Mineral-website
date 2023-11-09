
// ProductListPage.js
import React, { useState, useEffect } from 'react';
import ProductData from "./Product.json";
import './Product.css';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import Info from '../components/Getintouch';
import Footer from '../components/Footer';




function ProductList() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const addToCart = (product) => {
    // the logic to add the selected product to the cart here
    //  use state or some external cart management logic
    console.log(`Added ${product.name} to the cart`);
  };
  useEffect(() => {
    setProducts(ProductData.products);
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const filteredProducts = currentProducts.filter(product => {
    return (
      (!categoryFilter || product.category === categoryFilter) &&
      (!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });



  const categoryOptions = Array.from(
    new Set(products.map(product => product.category))
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  // Animation with react-spring
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  // Animation with framer-motion
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list-container">
      <animated.h1 className="page-title" style={fadeIn}>
        Product Listing
      </animated.h1>
      <div className="filter-section">
        <label>Categories</label>
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categoryOptions.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <motion.ul className="product-list">
        {filteredProducts.map(product => (
          <motion.li
            key={product.id}
            className="product-item"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            onClick={() => openProductDetails(product)} // Open product details on click
          >
        <div className="product-details">
    <div className="product-image">
      <img src={product.image} alt={`Product ${product.id}`} />
    </div>
    <h2 className="product-name">{product.name}</h2>
  </div>
          
          </motion.li>
        ))}
      </motion.ul>

      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              href="#"
              onClick={() => setCurrentPage(number)}
              className={`page-link ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>

      {/* Popup/Modal for Product Details */}
      {selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <span className="close" onClick={closeProductDetails}>
              &times;
            </span>
            <h2>Product Details</h2>
            <div className="product-name">{selectedProduct.name}</div>
            <div className="product-category">Category: {selectedProduct.category}</div>
            <div className="product-price">Price: ${selectedProduct.price}</div>
            <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
          </div>
        </div>
      )}
             <Info />
<Footer />
    </div>
  );
}

export default ProductList;
