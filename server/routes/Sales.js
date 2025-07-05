const express = require('express');
const db = require('../db');
const router = express.Router();

// Add a sale
router.post('/add', (req, res) => {
  const { product_id, quantity_sold } = req.body;

  const getProductQuery = 'SELECT price, quantity FROM products WHERE id = ?';
  db.query(getProductQuery, [product_id], (err, results) => {
    if (err || results.length === 0) return res.status(400).send({ error: 'Product not found' });

    const product = results[0];
    const total_price = product.price * quantity_sold;

    if (product.quantity < quantity_sold) {
      return res.status(400).send({ error: 'Not enough stock' });
    }

    const saleQuery = 'INSERT INTO sales (product_id, quantity_sold, total_price) VALUES (?, ?, ?)';
    const updateStock = 'UPDATE products SET quantity = quantity - ? WHERE id = ?';

    db.query(saleQuery, [product_id, quantity_sold, total_price], (err) => {
      if (err) return res.status(500).send(err);

      db.query(updateStock, [quantity_sold, product_id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ success: true, message: 'Sale recorded successfully' });
      });
    });
  });
});

// Get all sales
router.get('/', (req, res) => {
  const query = `
    SELECT sales.*, products.name AS product_name
    FROM sales
    JOIN products ON sales.product_id = products.id
    ORDER BY sale_date DESC
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

module.exports = router;
