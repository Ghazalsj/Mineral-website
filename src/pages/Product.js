// src/pages/Product.js

import React, { useEffect, useState } from 'react';
import ProductsData from "./Product.json";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Set the products state with the data from the imported JSON file
    setProducts(ProductsData.products);
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
