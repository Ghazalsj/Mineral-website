// src/components/ProductDetailPopup.js

import React from 'react';
import Modal from 'react-modal"';

Modal.setAppElement('#root'); // Set the root element for accessibility

function ProductDetailPopup({ product, isOpen, onRequestClose, onAddToCart }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
    >
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default ProductDetailPopup;
