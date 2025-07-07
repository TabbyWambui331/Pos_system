import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList.jsx';
import Layout from './components/Layout';
import './App.css'; // <-- Import your CSS file

const API_URL = 'http://localhost:5000/api/products';

function App() {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setProducts([]));

    fetch('http://localhost:5000/api/sales?last24h=true')
      .then(res => res.json())
      .then(data => setSales(data))
      .catch(() => setSales([]));
  }, []);

  const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);

  return (
    <Layout>
      <div className="container">
        <h1 className="main-title">
          Easymob <span className="subtitle">– making biz eazy!</span>
        </h1>
        <div className="sales-summary">
          <div className="sales-title">Sales (last 24 hours):</div>
          <div className="sales-amount">Ksh {totalSales}</div>
          <div className="sales-count">{sales.length} products sold</div>
        </div>
        <ProductList products={products} />
      </div>
    </Layout>
  );
}

export default App;
