import React, { useEffect, useState } from 'react';
import './Products.css'; // Create this file for custom styles if you want

const API_URL = 'http://localhost:5000/api/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-title">Product Inventory</h2>
      <div style={{ overflowX: 'auto' }}>
        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Expiry</th>
              <th>Price (Ksh)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const isExpired = new Date(product.expiry) < new Date();
              return (
                <tr key={product.id} style={{ background: isExpired ? '#fed7d7' : 'transparent' }}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td style={{ color: product.quantity < 10 ? 'red' : 'inherit', fontWeight: product.quantity < 10 ? 'bold' : 'normal' }}>
                    {product.quantity < 10 ? `${product.quantity} (Low)` : product.quantity}
                  </td>
                  <td style={{ color: isExpired ? '#c53030' : 'inherit' }}>
                    {new Date(product.expiry).toLocaleDateString()}
                  </td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;